import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useNavListStyles = makeStyles()((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
}));
