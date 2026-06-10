import { Box, Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";
import { usePageTitleStyles } from "./PageTitle.styles";

interface Props extends TypographyProps {
  title: string;
  subtitle?: string;
  button?: ReactNode;
  fontSize?: number;
}

const PageTitle = ({ title, subtitle, fontSize, button, ...props }: Props) => {
  const { classes } = usePageTitleStyles();
  return (
    <Box className={classes.container}>
      <Typography {...props} className={classes.text}>
        {title}
      </Typography>
      {subtitle && <Typography className={classes.subtitle}>{subtitle}</Typography>}
    </Box>
  );
};

export default PageTitle;
