import { FC } from "react";
import { useFormContext } from "react-hook-form";
import {
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { IOptions } from "types/types";

import { useFormSelectStyles } from "./FormSelect.styles";
import { getErrorByPath } from "utlis/form.utils";

interface Props {
  label: string;
  options: IOptions[];
  labelId?: string;
  disabled?: boolean;
  fieldName: string;
  defaultValue?: number | string;
  rootClassName?: string;
  margin?: "dense" | "none";
  fullWidth?: boolean;
  isAll?: boolean;
  loading?: boolean;
  clearable?: boolean;
  iconPosition?: "start" | "end";
  onChange?: (value: any) => void;
}

export const FormSelect: FC<Props> = ({
  label,
  options,
  disabled,
  fieldName,
  labelId = fieldName,
  defaultValue,
  rootClassName,
  fullWidth,
  margin = "dense",
  isAll,
  clearable,
  loading,
  iconPosition = "start",
  onChange,
}) => {
  const { classes, cx } = useFormSelectStyles();

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const value = watch(fieldName);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue(fieldName, "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    const newValue = e.target.value;
    setValue(fieldName, newValue, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    onChange?.(newValue);
  };

  const errorObj = getErrorByPath(errors, fieldName);
  const errorMsg = errorObj?.message || "";

  return (
    <FormControl
      className={cx(margin === "dense" && classes.root, rootClassName)}
      fullWidth={fullWidth}
      error={Boolean(errorMsg)}
      sx={{ position: "relative" }}
    >
      <InputLabel
        className={disabled || loading ? classes.disabled : ""}
        size="small"
        id={labelId}
      >
        {label}
      </InputLabel>
      <Select
        {...register(fieldName)}
        size="small"
        label={label}
        labelId={labelId}
        disabled={disabled || loading}
        sx={{ minWidth: 70 }}
        margin={margin}
        className={classes.select}
        value={value || ""}
        defaultValue={defaultValue}
        onChange={handleSelectChange}
        endAdornment={
          clearable && value ? (
            <InputAdornment position="end" sx={{ marginRight: 2 }}>
              <IconButton
                size="small"
                onClick={handleClear}
                edge="end"
                disabled={disabled}
                sx={{
                  visibility: value ? "visible" : "hidden",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <Close fontSize="small" />
              </IconButton>
            </InputAdornment>
          ) : loading ? (
            <InputAdornment position="end" sx={{ marginRight: 3 }}>
              <CircularProgress size={20} className={classes.disabled} />
            </InputAdornment>
          ) : null
        }
      >
        {isAll && (
          <MenuItem key="ALL" value="ALL" disabled={disabled}>
            Все
          </MenuItem>
        )}
        {options?.length ? (
          options?.map(({ label, value, disabled, icon }, index) => {
            const Icon = icon;

            return (
              <MenuItem key={`${label}-${index}`} value={value} disabled={disabled}>
                {iconPosition === "start" && Icon && (
                  <Icon
                    className={classes.color}
                    fontSize="small"
                    sx={{ marginRight: 1 }}
                  />
                )}
                {label}
                {iconPosition === "end" && Icon && (
                  <Icon
                    className={classes.color}
                    fontSize="small"
                    sx={{ marginLeft: 1, display: "flex", alignItems: "center" }}
                  />
                )}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem
            className={classes.noOptions}
            disabled
            value=""
            sx={{ fontStyle: "italic" }}
          >
            Нет опций
          </MenuItem>
        )}
      </Select>
      {errorMsg && (
        <FormHelperText sx={{ position: "absolute", bottom: -20 }}>
          {errorMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};
