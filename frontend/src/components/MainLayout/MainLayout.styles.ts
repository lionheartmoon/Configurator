import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useMainLayoutStyles = makeStyles()((theme: Theme) => ({
  rootWrapper: {
    backgroundColor: theme.layout.backgroundColor,
    position: "relative",
  },
  mainLayout: {
    padding: "24px",
    flexGrow: 1,
    backgroundColor: theme.layout.backgroundColor,
    transition: "margin-left 0.3s, background-color 0.3s",

    [theme.breakpoints.down(900)]: {
      filter: "brightness(100%)",
      transition: "filter 0.3s ease-in-out",
    },
  },
  withFooter: {
    minHeight: "calc(100vh - 104px)",
  },
  content: {
    flexGrow: 1,
    minHeight: "100%",
    marginTop: "64px",
    width: "100%",
    whiteSpace: "nowrap",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    // alignItems: "center",
  },
  fullContent: {
    minHeight: "calc(100vh - 96px)",
  },
  fullWidth: {
    marginLeft: "240px",

    [theme.breakpoints.down(900)]: {
      position: "relative",
      marginLeft: 0,
      filter: "brightness(40%)",
      transition: "filter 0.3s ease-in-out",
    },
  },
}));
