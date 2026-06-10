import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDraggableTableHeaderStyles = makeStyles()((theme: Theme) => ({
  cell: {
    boxSizing: "border-box",
    userSelect: "auto",
  },
  dragging: {
    userSelect: "none",
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    minHeight: 24,
    width: "100%",
    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
  },
  draggingWrapper: {
    width: "100%",
    minWidth: "auto",
  },
  title: {
    lineHeight: 1,
    whiteSpace: "nowrap",
    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontSize: "inherit",
    fontWeight: "inherit",
    letterSpacing: "normal",
  },
  icon: {
    cursor: "pointer",
  },
}));
