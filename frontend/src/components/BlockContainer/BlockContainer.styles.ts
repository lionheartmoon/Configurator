import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useBlockContainerStyles = makeStyles()((theme: Theme) => ({
  container: {
    background: theme.blocks.backgroundColor,
    border: `1px solid ${theme.blocks.border}`,
    borderRadius: 16,
    padding: "20px 20px 18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    flex: 1,
    minWidth: theme.spacing(16),
    position: "relative",
    overflow: "hidden",
    boxShadow: theme.blocks.shadow,
    transition: "transform 0.15s, box-shadow 0.15s",
    color: theme.text.color,
  },
}));
