import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { useBlockContainerStyles } from "./BlockContainer.styles";

interface Props extends PropsWithChildren {
  maxWidth?: number;
  height?: string | number;
}

export const BlockContainer: FC<Props> = ({ maxWidth, height, children }) => {
  const { classes } = useBlockContainerStyles();
  return (
    <Box sx={{ maxWidth, height }} className={classes.container}>
      {children}
    </Box>
  );
};
