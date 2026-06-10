import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDevicesCreateModalStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: `6px 0`,
  },
  protocol: {
    padding: theme.spacing(1.5, 2),
    backgroundColor: theme.blocks.backgroundColor,
    border: `1px solid ${theme.blocks.border}`,
    borderRadius: 12,
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.2s",

    display: "flex",
    flexDirection: "column",
    gap: 4,
    "&:hover": {
      boxShadow: theme.blocks.shadow,
    },
    "&:disabled": {
      opacity: 0.7,
    },
  },
  modbus: {
    borderColor: theme.protocol.modbus.color,
    background: `linear-gradient(135deg,${theme.protocol.modbus.color}30,${theme.protocol.modbus.color}10)`,
    boxShadow: `0px 2px 6px ${theme.protocol.modbus.color}75`,
    "&:hover": {
      boxShadow: `0px 2px 6px ${theme.protocol.modbus.color}75`,
    },
  },
  focas: {
    borderColor: theme.protocol.focas.color,
    background: `linear-gradient(135deg,${theme.protocol.focas.color}30,${theme.protocol.focas.color}10)`,
    boxShadow: `0px 2px 6px ${theme.protocol.focas.color}75`,
    "&:hover": {
      boxShadow: `0px 2px 6px ${theme.protocol.focas.color}75`,
    },
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: theme.text.color,
  },
}));
