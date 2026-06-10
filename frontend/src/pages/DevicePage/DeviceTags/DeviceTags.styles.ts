import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDeviceTagsStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  title: {
    padding: theme.spacing(2, 2, 0, 2),
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.getContrastText(theme.blocks.backgroundColor),
  },
  valueContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    padding: `3px 12px`,
    borderRadius: 10,

    backgroundColor: theme.chip.adjustment.backgroundColor,
    color: theme.chip.adjustment.color,
  },
}));
