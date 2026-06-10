import { Box, Typography } from "@mui/material";
import { appTexts } from "appTexts/appTexts";
import CModal from "components/CModal/CModal";
import { IDevice } from "stores/devicesStore";

interface Props {
  isOpen: boolean;
  device: IDevice | null;
  onClose: () => void;
}

export const DevicesDeleteModal = ({ isOpen, device, onClose }: Props) => {
  if (!device) return <></>;

  return (
    <CModal
      id="removeDevice"
      fullWidth
      open={isOpen}
      onClose={onClose}
      //   onConfirm={onConfirm}
      //   disabled={isFetch}
      //   loading={isFetch}
      title={appTexts.devicesPage.remove}
      okText={appTexts.components.modal.remove}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        Вы уверены, что хотите удалить устройство «
        <Typography sx={{ fontWeight: 600 }}>{device.name}</Typography>»?
      </Box>
    </CModal>
  );
};
