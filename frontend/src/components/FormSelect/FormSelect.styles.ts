import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useFormSelectStyles = makeStyles()((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  disabled: {
    color: theme.palette.text.disabled,
  },
  select: {
    "& .MuiSelect-select": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  },
  color: {
    fill: "red",
    color: theme.ui.text.label,
    width: "16px",
    height: "16px",
  },
  noOptions: {
    fontSize: "12px",
    padding: "5px 12px",
    textAlign: "center",
    fontStyle: "italic",
    justifyContent: "center",
  },
}));
