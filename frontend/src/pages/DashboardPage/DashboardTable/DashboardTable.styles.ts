import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDashboardTableStyles = makeStyles()((theme: Theme) => ({
  titleWrapper: {
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "14px",
    fontWeight: 600,
    color: theme.ui.text.secondary,
    fontFamily: "Inter, sans-serif",
  },
  filter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  select: {
    [theme.breakpoints.up("md")]: {
      minWidth: 200,
      maxWidth: 200,
    },
    // width: "100%",
  },
  chapter: {
    backgroundColor: theme.chip.adjustment.backgroundColor,
    border: `1px solid ${theme.chip.adjustment.color}`,
    color: theme.chip.adjustment.color,

    borderRadius: 10,
    padding: "4px 8px",
    fontSize: 12,
    fontWeight: 500,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
