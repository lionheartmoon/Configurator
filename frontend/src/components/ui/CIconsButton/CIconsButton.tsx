import { ReactNode, cloneElement, isValidElement } from "react";
import { IconButton, IconButtonProps, Tooltip } from "@mui/material";

import { useCIconsButtonStyles } from "./CIconsButton.styles";

interface Props extends Omit<IconButtonProps, "children"> {
  icon: ReactNode;
  text?: string | number;
  className?: string;
  tooltipText?: string;
  iconSize?: number;
}

export const CIconsButton = ({
  icon,
  text,
  className,
  tooltipText,
  iconSize = 18,
  ...rest
}: Props) => {
  const { classes, cx } = useCIconsButtonStyles();

  // const getIconWithSize = () => {
  //   if (isValidElement(icon)) {
  //     return cloneElement(icon, {
  //       size: icon.props?.size || iconSize,
  //       ...icon.props,
  //     });
  //   }
  //   return icon;
  // };

  const ButtonContent = (
    <IconButton
      className={cx(classes.iconBtn, { [classes.withText]: !!text }, className)}
      {...rest}
    >
      {icon}
      {text && <span className={classes.text}>{text}</span>}
    </IconButton>
  );

  return tooltipText ? (
    <Tooltip title={tooltipText} arrow>
      {ButtonContent}
    </Tooltip>
  ) : (
    ButtonContent
  );
};
