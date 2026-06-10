import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useStatsCardStyles = makeStyles<{ bottomLineColor: string }>()(
  (theme: Theme, params) => ({
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
      cursor: "pointer",

      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: theme.blocks.hoverShadow,
      },
    },
    bgCircle: {
      position: "absolute",
      top: -20,
      right: -20,
      width: 80,
      height: 80,
      borderRadius: "50%",
      opacity: 0.5,
    },
    iconBox: {
      width: 40,
      height: 40,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    valueBox: {
      fontSize: 32,
      fontWeight: 700,
      color: theme.ui.text.primary,
      lineHeight: 1,
      fontFamily: "Inter, sans-serif",
      letterSpacing: -0.5,
      textTransform: "capitalize",
    },
    label: {
      fontSize: 12,
      marginTop: 4,
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      letterSpacing: 0.2,
      color: theme.ui.text.info,
    },
    work: {
      color: theme.chip.success.color,
      backgroundColor: theme.chip.success.backgroundColor,
    },
    error: {
      color: theme.chip.error.color,
      backgroundColor: theme.chip.error.backgroundColor,
    },
    downtime: {
      color: theme.chip.warning.color,
      backgroundColor: theme.chip.warning.backgroundColor,
    },
    adjustment: {
      color: theme.chip.adjustment.color,
      backgroundColor: theme.chip.adjustment.backgroundColor,
    },
    noConnection: {
      color: theme.chip.disabled.color,
      backgroundColor: theme.chip.disabled.backgroundColor,
    },
    total: {
      color: theme.chip.total.color,
      backgroundColor: theme.chip.total.backgroundColor,
    },
    bottomLine: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 3,
      background: `linear-gradient(90deg, ${params.bottomLineColor} 0%, transparent 100%)`,
      borderRadius: "0 0 16px 16px",
      opacity: 0.6,
    },
  })
);
