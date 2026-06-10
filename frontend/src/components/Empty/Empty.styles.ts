import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useEmptyStyles = makeStyles()((theme: Theme) => ({
  emptyWrapper: {
    width: "100%",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(1),
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    color: theme.ui.text.label,
  },
}));
