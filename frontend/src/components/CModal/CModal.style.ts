import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useCModalStyles = makeStyles()((theme: Theme) => ({
  title: {
    padding: theme.spacing(2),
  },
  iconClose: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  content: {
    margin: theme.spacing(1),
    minWidth: 300,
    padding: theme.spacing(0, 1),
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  button: {
    width: "100px",
    // color: theme.button.color,
    // backgroundColor: theme.button.backgroundColor,
  },
  text: {
    color: theme.colors.contrast,
  },
  // dialogBox: {
  //   position: "absolute",
  //   top: 100,
  //   left: 100,
  //   zIndex: 1200,
  // },
  dialog: {
    // position: "absolute",
    // width: 600,
    // height: 500,
    backgroundColor: theme.blocks.backgroundColor,
    boxShadow: theme.modal.box.shadow,
    borderRadius: 4,
    display: "flex",
    flexDirection: "column",
  },
  scrollbar: {
    "&::-webkit-scrollbar-thumb:hover": {
      background: `${theme.table.total.color} !important`,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: theme.modal.box.backgroundColor,
    },
    "&::-webkit-scrollbar": {
      width: "6px",
      backgroundColor: theme.modal.box.backgroundColor,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.table.total.color,
    },
  },
}));
