import { PropsWithChildren, ReactNode, useRef } from "react";
import {
  Box,
  Breakpoint,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { X } from "lucide-react";
import CButton from "components/CButton/CButton";
import { CIconsButton } from "components/ui/CIconsButton/CIconsButton";

import { useCModalStyles } from "./CModal.style";
import { appTexts } from "appTexts/appTexts";

interface Props extends PropsWithChildren {
  id: string;
  open: boolean;
  title?: string;
  loading?: boolean;
  disabled?: boolean;
  okText?: string;
  cancelText?: string;
  info?: boolean;
  size?: Breakpoint;
  fullWidth?: boolean;
  border?: string;
  onClose: () => void;
  onConfirm?: () => void;
}

const CModal = ({
  id,
  open,
  title,
  loading,
  disabled,
  info,
  children,
  size,
  fullWidth,
  border,
  okText = appTexts.components.modal.okText,
  cancelText = appTexts.components.modal.cancelText,
  onClose,
  onConfirm,
}: Props) => {
  const { classes, cx } = useCModalStyles();

  const ref = useRef<HTMLElement>(null);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={size}
      fullWidth={fullWidth}
      className={border}
    >
      <DialogTitle id={id} className={cx(classes.title, classes.text)}>
        <Typography
          className={classes.text}
          sx={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
        <CIconsButton
          aria-label="close"
          icon={<X />}
          className={classes.iconClose}
          onClick={onClose}
        />
      </DialogTitle>
      <DialogContent className={cx(classes.content, classes.text, classes.scrollbar)}>
        {children}
      </DialogContent>
      {!info && (
        <DialogActions className={classes.actions}>
          <CButton
            variant="outlined"
            className={classes.button}
            fullWidth
            text={cancelText}
            onClick={onClose}
          />
          <CButton
            variant="contained"
            fullWidth
            text={okText}
            className={classes.button}
            loading={loading}
            disabled={disabled}
            color={okText === appTexts.components.modal.remove ? "error" : "primary"}
            onClick={() => onConfirm?.()}
          />
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CModal;
