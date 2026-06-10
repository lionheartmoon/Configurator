import { Box } from "@mui/material";
import { EEventStatus } from "types/types";
import { useEventLevelChipStyles } from "./EventLevelChip.styles";
import { useMemo } from "react";
import { appTexts } from "appTexts/appTexts";
import { CircleAlert, CircleCheck, CircleX } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useThemeContext } from "contexts/themeContext";

interface Props {
  level: EEventStatus;
}

export const EventLevelChip = observer(({ level }: Props) => {
  const { theme } = useThemeContext();
  const { classes, cx } = useEventLevelChipStyles();

  const containerColor = useMemo(
    () =>
      level === EEventStatus.INFO
        ? classes.infoContainer
        : level === EEventStatus.WARNING
          ? classes.warningContainer
          : classes.errorContainer,
    [level, theme]
  );

  const icon = useMemo(() => {
    switch (level) {
      case EEventStatus.INFO:
        return <CircleCheck size={12} />;

      case EEventStatus.WARNING:
        return <CircleAlert size={12} />;

      case EEventStatus.ERROR:
        return <CircleX size={12} />;

      default:
        return <CircleCheck size={12} />;
    }
  }, [level]);

  return (
    <Box component="span" className={cx(classes.container, containerColor)}>
      {icon}
      {appTexts.eventStatus[level]}
    </Box>
  );
});
