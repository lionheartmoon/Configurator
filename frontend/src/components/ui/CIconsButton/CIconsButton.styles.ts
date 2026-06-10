import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useCIconsButtonStyles = makeStyles()((theme: Theme) => ({
  iconBtn: {
    padding: "4px",
    minWidth: 34,
    minHeight: 34,
    borderRadius: 10,
    border: `1px solid ${theme.ui.iconButton.border}`,
    background: theme.ui.iconButton.bg,
    display: "flex",
    gap: "6px",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background 0.2s",
    color: theme.ui.iconButton.color,

    "&:hover": {
      backgroundColor: theme.ui.iconButton.hover,
    },
  },
  text: {
    fontSize: 14,
    whiteSpace: "nowrap",
    fontWeight: 500,
  },
  withText: {
    padding: "4px 10px",
  },
}));
