import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";

export const useSignInPageStyles = makeStyles()((theme: Theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    backgroundColor: theme.layout.backgroundColor,
    userSelect: "none",
  },
  main: {
    margin: "0 auto",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  auth: {
    position: "relative",
    backgroundColor: theme.auth.backgroundColor,
    boxShadow: theme.auth.boxShadow,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: theme.spacing(2),
    padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
  },
  themeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  icon: {
    margin: theme.spacing(1),
    ".MuiSvgIcon-root": {
      color: theme.auth.icon,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  submitBtn: {
    maxWidth: "40%",
    marginTop: theme.spacing(4),
    padding: theme.spacing(0.5),
  },
}));
