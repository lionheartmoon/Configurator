import { ReactNode } from "react";
import { Box } from "@mui/material";

import { useBlockUIStyles } from "./BlockUI.styles";

interface Props {
  children: ReactNode;
  className?: string;
  paddingNull?: boolean;
}

export const BlockUI = ({ children, className, paddingNull }: Props) => {
  const { classes, cx } = useBlockUIStyles();

  return (
    <Box className={cx(classes.blockUI, className, paddingNull && classes.paddingNull)}>
      {children}
    </Box>
  );
};
