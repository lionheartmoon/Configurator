import { BlockUI } from "components/BlockUI/BlockUI";
import { DataTableUI } from "components/DataTableUI/DataTableUI";
import { columnsConfig } from "./DevicesTable.config";
import { observer } from "mobx-react-lite";
import { useDeviceContext } from "contexts/devicesContext";
import { useEffect, useState } from "react";
import { IDataTable } from "components/DataTableServiceUI/DataTableServiceUI.types";
import { OnlineChip } from "components/OnlineChip/OnlineChip";
import { ProtocolChip } from "components/ProtocolChip/ProtocolChip";
import { Box } from "@mui/material";
import { CIconsButton } from "components/ui/CIconsButton/CIconsButton";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useDevicesTableStyles } from "./DevicesTable.styles";
import { useNavigate } from "react-router-dom";
import { routesPath } from "router/routes";
import { DevicesDeleteModal } from "../DevicesDeleteModal/DevicesDeleteModal";
import { IDevice } from "stores/devicesStore";
import { DevicesEditModal } from "../DevicesEditModal/DevicesEditModal";

export const DevicesTable = observer(() => {
  const { isFetch, devices, getDevices } = useDeviceContext();
  const nav = useNavigate();

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [selectedDevice, setSelectedDevice] = useState<IDevice | null>(null);

  useEffect(() => {
    getDevices();
  }, []);

  const { classes } = useDevicesTableStyles();
  return (
    <>
      <BlockUI paddingNull>
        <DataTableUI
          columnsConfig={columnsConfig}
          data={devices}
          loading={isFetch}
          skeletonColumns={5}
          renderCell={(columnKey: string, row: IDataTable, rowIndex: number) => {
            switch (columnKey) {
              case "ip":
                return row.ip;
              case "name":
                return row.name;
              case "protocol":
                return <ProtocolChip protocol={row.protocol} />;
              case "status":
                return <OnlineChip online={row.running} />;
              case "actions":
                return (
                  <Box className={classes.btnContainer}>
                    <CIconsButton
                      icon={<Eye size={14} />}
                      onClick={() => nav(`${routesPath.DEVICES}/${row.deviceId}`)}
                    />
                    <CIconsButton
                      icon={<Pencil size={14} />}
                      onClick={() => (
                        setSelectedDevice(row as IDevice),
                        setIsOpenEditModal(true)
                      )}
                    />
                    <CIconsButton
                      icon={<Trash2 size={14} />}
                      onClick={() => (
                        setSelectedDevice(row as IDevice),
                        setIsOpenDeleteModal(true)
                      )}
                    />
                  </Box>
                );

              default:
                return row[columnKey] || "-";
            }
          }}
        />
      </BlockUI>

      <DevicesEditModal
        protocol="modbus_tcp"
        isOpen={isOpenEditModal}
        onClose={() => setIsOpenEditModal(false)}
        editDevice={selectedDevice}
      />

      <DevicesDeleteModal
        isOpen={isOpenDeleteModal}
        device={selectedDevice}
        onClose={() => setIsOpenDeleteModal(false)}
      />
    </>
  );
});
