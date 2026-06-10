import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDevicePageStyles = makeStyles()((theme: Theme) => ({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
}));
