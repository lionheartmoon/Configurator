import { Box } from "@mui/material";
import { useServiceLevelChipStyles } from "./ServiceLevelChip.styles";
import { useMemo } from "react";
import { EServiceServerStatus } from "types/types";
import { appTexts } from "appTexts/appTexts";

interface Props {
  level: EServiceServerStatus;
}

export const ServiceLevelChip = ({ level }: Props) => {
  const { classes, cx } = useServiceLevelChipStyles();

  const containerColor = useMemo(
    () =>
      level === EServiceServerStatus.ACTIVE
        ? classes.infoContainer
        : level === EServiceServerStatus.RESTART
          ? classes.warningContainer
          : classes.errorContainer,
    [level]
  );

  return (
    <Box className={classes.box}>
      <Box component="span" className={cx(classes.container, containerColor)}>
        {appTexts.serviceStatus[level]}
      </Box>
    </Box>
  );
};
