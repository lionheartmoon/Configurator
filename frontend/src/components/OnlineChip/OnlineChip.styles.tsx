import { keyframes, Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`;

export const useOnlineChipStyles = makeStyles()((theme: Theme) => ({
  onlineBox: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  online: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    borderRadius: 12,
    border: `1px solid ${theme.chip.success.color + "66"}`,
    background: theme.chip.success.backgroundColor,
  },
  offline: {
    border: `1px solid ${theme.chip.error.color}66`,
    background: theme.chip.error.backgroundColor,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: theme.chip.success.color,
    display: "inline-block",
    animation: `${pulse} 1.8s infinite`,
  },
  dotOffline: {
    background: theme.chip.error.color,
  },
  live: {
    fontSize: 12,
    color: theme.chip.success.color,
    // fontFamily: "Inter, sans-serif",
    fontWeight: 600,
  },
  liveOffline: {
    color: theme.chip.error.color,
  },
}));
