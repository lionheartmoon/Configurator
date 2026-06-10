import { Box, useTheme } from "@mui/material";
import { useStatsCardStyles } from "./StatsCard.styles";
import { EStatsColor } from "types/types";
import { ReactNode } from "react";

interface Props {
  title?: string;
  icon: ReactNode;
  color: EStatsColor;
  value: string | number;
  height?: string | number;
}

export const StatsCard = ({ title, icon, color, value, height }: Props) => {
  const theme = useTheme();

  const colorMap = {
    [EStatsColor.SUCCESS]: theme.chip.success.color,
    [EStatsColor.ERROR]: theme.chip.error.color,
    [EStatsColor.WAITING]: theme.chip.warning.color,
    [EStatsColor.INFO]: theme.chip.adjustment.color,
  };

  const bottomLineColor = colorMap[color] || "transparent";

  const { classes, cx } = useStatsCardStyles({ bottomLineColor });

  const getClassName = (status: EStatsColor): string => {
    switch (status) {
      case EStatsColor.SUCCESS: {
        return classes.work;
      }
      case EStatsColor.ERROR: {
        return classes.error;
      }
      case EStatsColor.WAITING: {
        return classes.downtime;
      }
      case EStatsColor.INFO: {
        return classes.adjustment;
      }
      default:
        return "";
    }
  };
  return (
    <Box className={classes.container} sx={{ height }}>
      <Box className={cx(classes.bgCircle, getClassName(color))} />
      <Box className={cx(classes.iconBox, getClassName(color))}>{icon}</Box>
      <Box>
        <Box className={classes.valueBox}>{value}</Box>
        {title && <Box className={classes.label}>{title}</Box>}
      </Box>
      <Box className={classes.bottomLine} />
    </Box>
  );
};
