import CModal from "components/CModal/CModal";
import { useDevicesCreateModalStyles } from "./DevicesCreateModal.styles";
import { Box, Button, Typography } from "@mui/material";
import { DevicesListInfo } from "../DevicesListInfo/DevicesListInfo";
import { focasInfoList, modbusInfoList } from "./DevicesCreateModal.config";
import { useState } from "react";
import { TDeviceType } from "types/types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  openEditModal: (value: TDeviceType) => void;
}

export const DevicesCreateModal = ({ isOpen, onClose, openEditModal }: Props) => {
  const [protocol, setProtocol] = useState<TDeviceType>(null);

  const handleCloseModal = () => {
    setProtocol(null);
    onClose();
  };

  const handleSubmit = () => {
    if (!protocol) return;

    openEditModal(protocol);
    handleCloseModal();
  };

  const { classes, cx } = useDevicesCreateModalStyles();
  return (
    <CModal
      fullWidth
      id="editDevices"
      title="Выбор протокола"
      open={isOpen}
      size="sm"
      disabled={!protocol}
      onClose={handleCloseModal}
      onConfirm={handleSubmit}
    >
      <Box className={classes.container}>
        <Button
          className={cx(classes.protocol, protocol === "modbus_tcp" && classes.modbus)}
          onClick={() => setProtocol("modbus_tcp")}
        >
          <Typography className={classes.title}>MODBUS</Typography>
          <DevicesListInfo protocol="modbus" options={modbusInfoList} />
        </Button>
        <Button
          disabled
          className={cx(classes.protocol, protocol === "focas" && classes.focas)}
          onClick={() => setProtocol("focas")}
        >
          <Typography className={classes.title}>FOCAS</Typography>
          <DevicesListInfo protocol="focas" options={focasInfoList} />
        </Button>
      </Box>
    </CModal>
  );
};
