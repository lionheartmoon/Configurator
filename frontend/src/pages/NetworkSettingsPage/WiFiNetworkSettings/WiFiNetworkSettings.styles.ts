import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useWiFiNetworkSettingsStyles = makeStyles()((theme: Theme) => ({
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(1),
  },
}));
