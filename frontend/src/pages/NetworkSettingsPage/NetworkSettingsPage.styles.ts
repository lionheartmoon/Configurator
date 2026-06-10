import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useNetworkSettingsPageStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    gap: theme.spacing(2),
  },
}));
