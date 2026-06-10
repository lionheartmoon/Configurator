// ContentBlock.tsx
import { ReactNode } from "react";
import { Info } from "lucide-react";
import { Box, Divider, Tooltip, Typography } from "@mui/material";
import { Chip } from "../Chip/Chip";

import { useContentBlockStyles } from "./ContentBlock.styles";

interface Props {
  children: ReactNode;
  title: string;
  subTitle?: string;
  chipText?: string;
  className?: string;
  info?: string;
  icon?: ReactNode;
}

export const ContentBlock = ({
  children,
  title,
  subTitle,
  chipText,
  className,
  info,
  icon,
}: Props) => {
  const { classes, cx } = useContentBlockStyles();

  return (
    <Box className={cx(classes.contentBox, className)}>
      <Box className={classes.headerBox}>
        <Box className={classes.header}>
          {/* {icon && <Box className={classes.iconWrapper}>{icon}</Box>} */}
          {icon}
          <Box className={classes.textContainer}>
            <Box className={classes.infoBox}>
              <Typography component="span" className={classes.title}>
                {title}
              </Typography>
              {!!info && (
                <Tooltip title={info}>
                  <Info size={16} className={classes.info} />
                </Tooltip>
              )}
            </Box>
            {subTitle && <Typography className={classes.subTitle}>{subTitle}</Typography>}
          </Box>

          {chipText && <Chip text={chipText} />}
        </Box>
      </Box>
      <Divider />
      <Box className={classes.children}>{children}</Box>
    </Box>
  );
};
