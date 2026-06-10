import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useEventLevelChipStyles = makeStyles()((theme: Theme) => ({
  container: {
    borderRadius: 10,
    padding: "4px 8px",
    fontSize: 12,
    fontWeight: 500,

    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    gap: 4,
  },
  infoContainer: {
    backgroundColor: theme.chip.success.backgroundColor,
    border: `1px solid ${theme.chip.success.color}`,
    color: theme.chip.success.color,
  },
  warningContainer: {
    backgroundColor: theme.chip.warning.backgroundColor,
    border: `1px solid ${theme.chip.warning.color}`,
    color: theme.chip.warning.color,
  },
  errorContainer: {
    backgroundColor: theme.chip.error.backgroundColor,
    border: `1px solid ${theme.chip.error.color}`,
    color: theme.chip.error.color,
  },
}));
