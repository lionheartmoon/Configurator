import { useFormContext } from "react-hook-form";
import {
  IconButton,
  InputAdornment,
  StandardTextFieldProps,
  TextField,
} from "@mui/material";

import { useFormTextFieldStyles } from "./FormTextField.styles";
import { HTMLInputTypeAttribute, ReactNode, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface Props extends StandardTextFieldProps {
  fieldName: string;
  isLoading?: boolean;
  required?: boolean;
  shrink?: boolean;
  className?: string;
  max?: number;
  min?: number;
  endAdornment?: ReactNode;
  type?: HTMLInputTypeAttribute;
  autoComplete?: string;
  readOnly?: boolean;
}

const FormTextField = ({
  fieldName,
  isLoading,
  required,
  shrink,
  className,
  margin = "normal",
  max,
  min,
  endAdornment,
  type,
  autoComplete,
  readOnly,
  ...props
}: Props) => {
  const [show, setShow] = useState(false);

  const isPassword = type === "password";

  const currentType = isPassword ? (show ? "text" : "password") : type;

  const handleClickShowPassword = () => setShow((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { classes, cx } = useFormTextFieldStyles();
  return (
    <TextField
      {...register(fieldName)}
      size="small"
      margin={margin}
      type={currentType}
      autoComplete={autoComplete}
      required={required}
      className={cx(className)}
      error={!!errors[fieldName]}
      helperText={(errors[fieldName]?.message as string) || undefined}
      disabled={isLoading}
      {...props}
      slotProps={{
        formHelperText: {
          classes: { root: classes.errorText },
        },
        inputLabel: {
          shrink: shrink ? true : undefined,
        },
        input: {
          readOnly: readOnly,
          inputProps: {
            max: max,
            min: min,
          },
          endAdornment: (
            <>
              <InputAdornment position="end">
                {isPassword ? (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {show ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ) : (
                  endAdornment
                )}
              </InputAdornment>
            </>
          ),
        },
      }}
      //   formHelperTextProps={{ classes: { root: classes.errorText } }}
      //   inputProps={{ inputProps: { max: max, min: min }, endAdornment }}
      //   InputLabelProps={{ shrink: shrink ? true : undefined }}
    />
  );
};

export default FormTextField;
