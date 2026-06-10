import { Box, Typography } from "@mui/material";
import { useOnlineChipStyles } from "./OnlineChip.styles";

interface Props {
  online?: boolean;
}

export const OnlineChip = ({ online }: Props) => {
  const { classes, cx } = useOnlineChipStyles();
  return (
    <Box className={classes.onlineBox}>
      <Box className={cx(classes.online, !online && classes.offline)}>
        <Typography
          component="span"
          className={cx(classes.dot, !online && classes.dotOffline)}
        />
        <Typography
          component="span"
          className={cx(classes.live, !online && classes.liveOffline)}
        >
          {online ? "В сети" : "Не в сети"}
        </Typography>
      </Box>
    </Box>
  );
};
