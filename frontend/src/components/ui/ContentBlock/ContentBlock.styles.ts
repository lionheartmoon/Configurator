import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useContentBlockStyles = makeStyles()((theme: Theme) => ({
  contentBox: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.blocks.backgroundColor,
    borderRadius: theme.spacing(2),
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: theme.blocks.shadow,
  },
  headerBox: {
    padding: theme.spacing(2, 2.5),
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(1.5),
    minHeight: 40,
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(0.25),
    minWidth: 0,
    flex: 1,
  },
  infoBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(1),
    minWidth: 0,
  },
  info: {
    color: theme.ui.text.info,
    flexShrink: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.ui.text.primary,
    fontFamily: "Inter, sans-serif",
    lineHeight: 1.4,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  subTitle: {
    fontSize: 12,
    color: theme.ui.text.info,
    lineHeight: 1.4,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
  },
  children: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
}));
