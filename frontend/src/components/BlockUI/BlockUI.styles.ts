import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useBlockUIStyles = makeStyles()((theme: Theme) => ({
  blockUI: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: "16px",
    padding: "16px 20px",
    border: theme.blocks.border,
    boxShadow: theme.blocks.shadow,
    backgroundColor: theme.blocks.backgroundColor,
  },
  paddingNull: {
    padding: 0,
  },
}));
