import { Box, Typography } from "@mui/material";
import { useFooterStyles } from "./Footer.styles";
import dayjs from "dayjs";
import { OnlineChip } from "components/OnlineChip/OnlineChip";

export const Footer = () => {
  const { classes } = useFooterStyles();
  return (
    <Box component="footer" className={classes.footer}>
      <Box className={classes.container}>
        <Box className={classes.textWrapper}>
          <Typography>
            © {dayjs().year()} Efficiency & Smart Automation LLC. Все права защищены.
          </Typography>
          <Box className={classes.status}>
            <Typography>Версия: 1.2.0 | Статус:</Typography>
            <OnlineChip online />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
