import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useCButtonStyles = makeStyles()((theme: Theme) => ({
  button: {
    position: "relative",
    lineHeight: 2,
    // backgroundColor: theme.button.backgroundColor,
    // color: theme.button.color,
  },
  startIcon: {
    position: "absolute",
    margin: 0,
  },
}));
