import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useLoaderStyles = makeStyles()((theme: Theme) => ({
  loader: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "auto",
    backgroundColor: theme.loader.backgroundColor,
    zIndex: theme.zIndex.fab,
  },
  progress: {
    color: theme.loader.color,
  },
}));
