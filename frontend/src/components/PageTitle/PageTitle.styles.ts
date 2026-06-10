import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const usePageTitleStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: 4,
  },
  text: {
    color: theme.text.color,
    fontWeight: 600,
    fontSize: 20,
  },
  subtitle: {
    color: theme.text.info,
    fontSize: 13,
  },
}));
