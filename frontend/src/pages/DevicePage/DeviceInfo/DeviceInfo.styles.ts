import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDeviceInfoStyles = makeStyles()((theme: Theme) => ({
  empty: {
    height: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "100%",
    padding: theme.spacing(2),

    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.getContrastText(theme.blocks.backgroundColor),
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: theme.spacing(0.5),
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: theme.text.color,
  },
  infoValue: {
    fontSize: 14,
    color: theme.text.color,
  },
}));
