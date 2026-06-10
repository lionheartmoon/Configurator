import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useChipStyles = makeStyles()((theme: Theme) => ({
  chip: {
    fontSize: 11,
    fontWeight: 500,
    color: theme.ui.text.info,
    background: theme.ui.text.highlight,
    padding: "3px 8px",
    borderRadius: 6,
  },
}));
