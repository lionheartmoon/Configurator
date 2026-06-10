import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDevicesTableStyles = makeStyles()((theme: Theme) => ({
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
  },
}));
