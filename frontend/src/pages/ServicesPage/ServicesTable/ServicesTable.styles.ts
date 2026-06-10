import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useServicesTableStyles = makeStyles()((theme: Theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  btnRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    gap: 6,
  },
}));
