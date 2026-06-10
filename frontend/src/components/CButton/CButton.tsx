import { FC } from "react";
import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { useCButtonStyles } from "./CButton.styles";

interface Props extends ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  text: string;
  className?: string;
  size?: ButtonProps["size"];
}

const CButton: FC<Props> = ({
  loading,
  disabled,
  text,
  size = "small",
  className,
  ...props
}) => {
  const { classes, cx } = useCButtonStyles();

  return (
    <Button
      size={size}
      disabled={disabled || loading}
      startIcon={
        loading ? <CircularProgress color={props.color} size={24} /> : null
      }
      className={cx(classes.button, className)}
      classes={{ startIcon: classes.startIcon }}
      {...props}
    >
      {text}
    </Button>
  );
};

export default CButton;
