import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useFooterStyles = makeStyles()((theme: Theme) => ({
  footer: {
    height: 55,
    width: "100%",
    marginTop: "auto",
    position: "relative",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.footer.backgroundColor,
    borderTop: `1px solid ${theme.footer.border}`,
    boxShadow: theme.blocks.shadow,
    transition: "background-color 0.3s",
    userSelect: "none",
  },
  container: {
    width: "100%",
    padding: "0 24px",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(1),
    color: theme.text.color,
  },
  status: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
}));
