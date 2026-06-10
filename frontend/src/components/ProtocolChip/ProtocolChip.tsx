import { Box } from "@mui/material";
import { TDeviceType } from "types/types";
import { useProtocolChipStyles } from "./ProtocolChip.styles";
import { appTexts } from "appTexts/appTexts";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { useThemeContext } from "contexts/themeContext";

interface Props {
  protocol: TDeviceType;
}

export const ProtocolChip = observer(({ protocol }: Props) => {
  const { theme } = useThemeContext();
  const { classes, cx } = useProtocolChipStyles();

  const chipColor = useMemo(
    () =>
      protocol === "modbus_tcp"
        ? classes.modbusChip
        : protocol === "focas" && classes.focasChip,
    [protocol, theme]
  );
  return (
    <Box className={classes.container}>
      <Box className={cx(classes.chip, chipColor)}>
        {protocol ? appTexts.deviceType[protocol] : "Не найден"}
      </Box>
    </Box>
  );
});
