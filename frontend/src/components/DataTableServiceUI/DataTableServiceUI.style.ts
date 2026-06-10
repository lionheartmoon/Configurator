import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDataTableDowntimeUIStyles = makeStyles()((theme: Theme) => ({
 container: {
    backgroundColor: theme.blocks.backgroundColor,
    borderRadius: 0,
    borderTop: `1px solid ${theme.sideBar.active}`,
  },
  sortIcon: {
    color: theme.ui.text.label,
  },
  headRow: {
    backgroundColor: theme.ui.table.th.backgroundColor,
    position: "relative",
  },
  th: {
    fontFamily: "Inter, sans-serif",
    padding: "12px 20px",
    color: theme.ui.table.th.color,
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    lineHeight: 1.1,
    borderBottom: "none",
    backgroundColor: theme.ui.table.th.backgroundColor,
  },
  popover: {
    padding: "16px",
    minWidth: "200px",
    backgroundColor: theme.blocks.backgroundColor,
    boxShadow: theme.blocks.shadow,
    border: `1px solid ${theme.blocks.border}`,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: "4px",

    "& > span": {
      fontSize: "11px",
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "1px",
    },
  },
  tdRow: {
    borderBottom: `1px solid ${theme.ui.table.border}`,
    cursor: "pointer",
    transition: "background 0.2s",

    "&:hover": {
      backgroundColor: theme.ui.table.hover,
    },
  },
  td: {
    padding: "10px 20px",
    fontSize: "13px",
    color: theme.ui.table.td.color,
    fontFamily: "Roboto, monospace",
    whiteSpace: "nowrap",
    borderBottom: "none",
    lineHeight: 1.1,
    transition: "color 0.4s ease",
  },
  skeleton: {
    padding: "4px 20px",
    borderBottom: "none",
  },
  footerTd: {
    border: "none",
    padding: "12px 20px",
  },
  expandedRow: {
    backgroundColor: theme.layout.backgroundColor + "66",
    "&:hover": {
      backgroundColor: theme.sideBar.hover,
    },
  },
  childTd: {
    fontWeight: 400,
  },
  arrow: {
    fontSize: 20,
    color: theme.sideBar.textDefault,
    transition: "transform 0.4s ease",
  },
  arrowDown: {
    color: theme.sideBar.textDefault,
    fontSize: 20,
    transform: "rotate(90deg)",
    transition: "transform 0.4s ease",
  },
  tdGroup: {
    padding: "10px 20px 10px 10px",
  },
  settings: {
    padding: "12px 6px",
  },
  emptyTd: {
    padding: 0,
    border: "none",
  },
  draggingColumn: {
    opacity: 0.5,
    cursor: "grabbing",
  },

  dragHandle: {
    cursor: "grab",
    "&:active": {
      cursor: "grabbing",
    },
  },
}));
