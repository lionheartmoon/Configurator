import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDashboardStatsStyles = makeStyles()((theme: Theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2),
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
