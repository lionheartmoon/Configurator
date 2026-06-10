import { Box } from "@mui/material";
import PageTitle from "components/PageTitle/PageTitle";
import { useServicesTableStyles } from "./ServicesTable.styles";
import { CIconsButton } from "components/ui/CIconsButton/CIconsButton";
import { Play, RotateCcw, Square } from "lucide-react";
import { BlockUI } from "components/BlockUI/BlockUI";
import { DataTableUI } from "components/DataTableUI/DataTableUI";
import { columnsConfig } from "./ServicesTable.config";
import { servicesTableMock } from "./ServicesTable.mock";
import { ServiceLevelChip } from "components/ServiceLevelChip/ServiceLevelChip";

export const ServicesTable = () => {
  const { classes } = useServicesTableStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <PageTitle title="Управление сервисами" subtitle="Журнал сервисов модуля" />
        <Box className={classes.btnRow}>
          <CIconsButton icon={<Play size={16} />} tooltipText="Запустить все" />
          <CIconsButton icon={<RotateCcw size={16} />} tooltipText="Перезапустить все" />
          <CIconsButton icon={<Square size={16} />} tooltipText="Остановить все" />
        </Box>
      </Box>

      <BlockUI paddingNull>
        <DataTableUI
          columnsConfig={columnsConfig}
          data={servicesTableMock}
          renderCell={(columnKey, row, rowIndex) => {
            switch (columnKey) {
              case "service":
                return row.service;
              case "description":
                return row.description;
              case "status":
                return <ServiceLevelChip level={row.status} />;
              case "actions":
                return (
                  <Box className={classes.btnRow}>
                    <CIconsButton icon={<Play size={16} />} tooltipText="Запустить" />
                    <CIconsButton
                      icon={<RotateCcw size={16} />}
                      tooltipText="Перезапустить"
                    />
                    <CIconsButton icon={<Square size={16} />} tooltipText="Остановить" />
                  </Box>
                );

              default:
                return row[columnKey] || "-";
            }
          }}
        />
      </BlockUI>
    </Box>
  );
};
