import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useTheme,
} from "@mui/material";
import { useDevicesListInfoStyles } from "./DevicesListInfo.styles";
import { IDeviceListOption } from "types/types";

interface Props {
  options: IDeviceListOption[];
  protocol: "modbus" | "focas";
}

export const DevicesListInfo = ({ options, protocol }: Props) => {
  const { protocol: protocolTheme } = useTheme();

  const { color } = protocolTheme[protocol];

  const { classes, cx } = useDevicesListInfoStyles({ color });
  return (
    <List className={classes.container}>
      {options.map(({ icon, text }, index) => {
        const Icon = icon;
        return (
          <ListItem key={index} sx={{ gap: 1 }}>
            <ListItemAvatar className={classes.itemIcon}>
              <Avatar className={cx(classes.itemIcon, classes.icon)}>
                <Icon size={14} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={text} />
          </ListItem>
        );
      })}
    </List>
  );
};
