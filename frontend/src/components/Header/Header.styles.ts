import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useHeaderStyles = makeStyles()((theme: Theme) => ({
  appBar: {
    position: "fixed",
    backgroundColor: theme.header.backgroundColor,
    transition: "background-color 0.3s ease, border-color 0.3s ease",
    boxShadow: theme.header.shadow,
    borderBottom: `1px solid ${theme.header.border}`,
  },

  leftSection: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    marginLeft: "auto",
  },

  titleWrapper: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  title: {
    userSelect: "none",
    marginLeft: "-6px",
  },
  titleBox: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  version: {
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    color: theme.text.color,

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  iconLight: {
    color: theme.palette.primary.dark,
  },
  iconDark: {
    color: "rgba(0, 0, 0, 1)",
  },
  shift: {
    marginLeft: 14,
  },
  engineering: {
    marginLeft: 8,
  },
  tablet: {
    marginRight: 8,
    textWrap: "nowrap",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  userName: {
    textAlign: "center",
    marginBottom: theme.spacing(1),
    wordBreak: "break-word",
  },
  icon: {
    color: theme.header.iconColor,
  },
  divider: {
    marginTop: "4px !important",
    marginBottom: "4px !important",
  },
}));
