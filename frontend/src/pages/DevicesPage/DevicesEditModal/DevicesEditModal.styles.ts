import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useDevicesEditModalStyles = makeStyles()((theme: Theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  inputs: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  tagsRow: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tags: {
    fontSize: 14,
    fontWeight: 500,
    color: theme.text.color,
  },
  tableRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  iconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
