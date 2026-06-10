import { FC } from "react";
import { RotateCcw, Settings } from "lucide-react";
import {
  Box,
  Popover,
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import CButton from "components/CButton/CButton";

import { useColumnSettingsStyles } from "./ColumnSettings.styles";
import { ColumnsConfig } from "components/DataTableServiceUI/DataTableServiceUI.types";

interface ColumnSettingsProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
  columnsConfig: ColumnsConfig[];
  hideableColumns: string[];
  hiddenColumns: string[];
  onToggleColumn: (columnKey: string) => void;
  reset?: () => void;
}

export const ColumnSettings: FC<ColumnSettingsProps> = ({
  open,
  anchorEl,
  onOpen,
  onClose,
  columnsConfig,
  hideableColumns,
  hiddenColumns,
  onToggleColumn,
  reset,
}) => {
  const { classes, cx } = useColumnSettingsStyles();

  return (
    <Box className={classes.container}>
      <IconButton size="small" onClick={onOpen} sx={{ padding: 0.5 }}>
        <Settings size={16} />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{ paper: classes.paper }}
      >
        <Box className={classes.popover}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Отображение колонок
          </Typography>
          <FormGroup>
            {columnsConfig
              .filter((col) => hideableColumns.includes(col.key))
              .map((col) => (
                <FormControlLabel
                  key={col.key}
                  className={cx(classes.label, {
                    [classes.active]: !hiddenColumns.includes(col.key),
                  })}
                  control={
                    <Checkbox
                      checked={!hiddenColumns.includes(col.key)}
                      onChange={() => onToggleColumn(col.key)}
                      size="small"
                    />
                  }
                  label={col.title}
                />
              ))}
          </FormGroup>
          {hideableColumns?.length && (
            <Box className={classes.resetWrapper}>
              <CButton text="Сброс" onClick={reset} startIcon={<RotateCcw size={14} />} />
            </Box>
          )}
        </Box>
      </Popover>
    </Box>
  );
};
