import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useNavItemStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    userSelect: "none",
    cursor: "pointer",
    color: theme.sideBar.default,
    fontSize: 14,
    transition: "0.3s all",
    ":hover": {
      color: theme.sideBar.textDefault,
    },
  },
  active: {
    color: theme.sideBar.text,
    ":hover": {
      color: theme.sideBar.hover,
    },
  },
}));
