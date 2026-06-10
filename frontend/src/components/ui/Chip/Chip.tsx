import { Typography } from "@mui/material";

import { useChipStyles } from "./Chip.styles";

interface Props {
  text: string;
  className?: string;
}

export const Chip = ({ text, className }: Props) => {
  const { classes, cx } = useChipStyles();

  return (
    <Typography component="span" className={cx(classes.chip, className)}>
      {text}
    </Typography>
  );
};
