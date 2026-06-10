import { Box, Typography } from "@mui/material";
import { BlockUI } from "components/BlockUI/BlockUI";
import { observer } from "mobx-react-lite";
import { useDeviceTagsStyles } from "./DeviceTags.styles";
import { DataTableUI } from "components/DataTableUI/DataTableUI";
import { columnsConfig } from "./DeviceTags.config";
import { IDataTable } from "components/DataTableServiceUI/DataTableServiceUI.types";
import { useEffect, useState } from "react";

interface ITag {
  name: string;
  value: number;
}

export const DeviceTags = observer(() => {
  const { classes } = useDeviceTagsStyles();
  const [tags, setTags] = useState<ITag[]>([]);

  useEffect(() => {
    setTags(
      Array.from({ length: 6 }).map((_, index) => ({
        name: `Axis ${index + 1}`,
        value: Math.floor(Math.random() * 100),
      }))
    );

    const interval = setInterval(() => {
      setTags(
        Array.from({ length: 6 }).map((_, index) => ({
          name: `Axis ${index + 1}`,
          value: Math.floor(Math.random() * 100),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BlockUI paddingNull>
      <Box className={classes.container}>
        <Typography className={classes.title}>Мониторинг тегов</Typography>

        <DataTableUI
          containerBorder
          columnsConfig={columnsConfig}
          data={tags}
          renderCell={(columnKey: string, row: IDataTable, rowIndex: number) => {
            switch (columnKey) {
              case "name":
                return row.name;
              case "value":
                return (
                  <Box className={classes.valueContainer}>
                    <Box className={classes.value}>{row.value}</Box>
                  </Box>
                );

              default:
                return row[columnKey] || "-";
            }
          }}
        />
      </Box>
    </BlockUI>
  );
});
