import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useNotFoundPageStyles = makeStyles()((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(2),
  },
}));
