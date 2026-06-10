import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDashboardTimeStyles = makeStyles()((theme: Theme) => ({
  title: {
    fontWeight: 500,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },
}));
