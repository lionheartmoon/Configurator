import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useFormTextFieldStyles = makeStyles()((theme: Theme) => ({
  errorText: {
    position: "absolute",
    bottom: -20,
  },
}));
