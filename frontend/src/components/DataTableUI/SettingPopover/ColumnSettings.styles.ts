import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useColumnSettingsStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: "inline-flex",
  },
  paper: {
    borderRadius: "16px",
  },
  popover: {
    padding: "16px 16px 8px 16px",
    minWidth: "200px",
    backgroundColor: theme.blocks.backgroundColor,
    boxShadow: theme.blocks.shadow,
    border: `1px solid ${theme.blocks.border}`,
  },
  label: {
    color: theme.ui.text.label,
    "& .MuiTypography-root": {
      fontSize: 14,
      color: "inherit",
    },
  },
  active: {
    color: theme.ui.text.secondary,
  },
  resetWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: "8px",
  },
}));
