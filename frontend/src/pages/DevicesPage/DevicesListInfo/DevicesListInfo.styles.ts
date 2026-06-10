import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDevicesListInfoStyles = makeStyles<{ color: string }>()(
  (theme: Theme, { color }) => ({
    container: {
      width: "100%",
      padding: 0,
      color: theme.palette.getContrastText(theme.blocks.backgroundColor),
    },
    itemIcon: {
      height: 26,
      width: 26,
      minWidth: 26,
    },
    icon: {
      backgroundColor: color,
    },
  })
);
