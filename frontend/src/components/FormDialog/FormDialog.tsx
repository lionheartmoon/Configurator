import { ReactNode } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import CButton from "components/CButton/CButton";
import Loader from "components/Loader/Loader";
import { appTexts } from "appTexts/appTexts";

import { useFormDialogStyles } from "./FormDialog.styles";

interface Props {
  open: boolean;
  title: string;
  subtitle?: string;
  children: ReactNode;
  loading?: boolean;
  mainLoading?: boolean;
  disabledOk?: boolean;
  okText?: string;
  disabledCancel?: boolean;
  formClassName?: string;
  contentClassName?: string;
  actionsClassName?: string;
  actionsButton?: boolean;
  maxWidth?: DialogProps["maxWidth"];
  onSubmit?: (event: any) => void;
  onCloseDialog: () => void;
}

const FormDialog = ({
  open,
  title,
  subtitle,
  children,
  loading,
  mainLoading,
  disabledOk,
  okText = appTexts.components.modal.okText,
  disabledCancel,
  formClassName,
  contentClassName,
  actionsClassName,
  actionsButton,
  maxWidth,
  onSubmit,
  onCloseDialog,
}: Props) => {
  const { classes, cx } = useFormDialogStyles();

  return (
    <Dialog
      open={open}
      fullWidth={maxWidth ? true : false}
      maxWidth={maxWidth ? maxWidth : "sm"}
    >
      {mainLoading && <Loader />}
      <DialogTitle variant="h5"  className={classes.title}>
        {title}
        {subtitle && (
          <Box>
            <Typography variant="subtitle2">{subtitle}</Typography>
          </Box>
        )}

        <IconButton
          aria-label="close-icon"
          className={classes.closeIcon}
          onClick={onCloseDialog}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <Box
        className={cx(classes.formWrapper, formClassName)}
        component="form"
        onSubmit={onSubmit}
      >
        <DialogContent
          // dividers={scroll === "paper"}
          className={cx(classes.content, classes.overflowHidden, contentClassName)}
        >
          {children}
        </DialogContent>
        {!actionsButton && (
          <DialogActions className={cx(classes.actions, actionsClassName)}>
            <CButton
              variant="outlined"
              className={classes.button}
              disabled={disabledCancel}
              onClick={onCloseDialog}
              text={appTexts.components.modal.cancelText}
              size="small"
            />
            <CButton
              variant="contained"
              type="submit"
              className={classes.button}
              loading={loading}
              disabled={disabledOk || loading}
              text={okText}
              size="small"
            />
          </DialogActions>
        )}
      </Box>
    </Dialog>
  );
};

export default FormDialog;
