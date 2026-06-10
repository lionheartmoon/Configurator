import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useProtocolChipStyles = makeStyles()((theme: Theme) => ({
  container: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  chip: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 10px",
    borderRadius: 12,
    border: `1px solid ${theme.chip.disabled.color + "66"}`,
    background: theme.chip.disabled.backgroundColor,

    fontSize: 12,
    fontWeight: 600,
  },
  modbusChip: {
    border: `1px solid ${theme.protocol.modbus.color + "66"}`,
    background: theme.protocol.modbus.backgroundColor,
    color: theme.protocol.modbus.color,
  },
  focasChip: {
    border: `1px solid ${theme.protocol.focas.color + "66"}`,
    background: theme.protocol.focas.backgroundColor,
    color: theme.protocol.focas.color,
  },
}));
