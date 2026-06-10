import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useFormDialogStyles = makeStyles()((theme: Theme) => ({
  closeIcon: {
    position: "absolute",
    right: 0,
    top: 0,
    color: "grey",
  },
  formWrapper: {
    minWidth: theme.spacing(40),
  },
  content: {
    display: "flex",
    flexDirection: "row",
    columnGap: theme.spacing(2),
    paddingTop: 0,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "4px 24px 16px",
  },
  errorText: {
    position: "absolute",
    bottom: -20,
  },
  button: {
    minWidth: theme.spacing(10),
  },
  overflowHidden: {
    overflowY: "hidden",
  },
  title: {
    color: theme.text.color,
    textAlign: "center",
  },
}));
