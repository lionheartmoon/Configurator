import { Box } from "@mui/material";
import { MainLayout } from "components/MainLayout/MainLayout";
import PageTitle from "components/PageTitle/PageTitle";
import { usePageTitle } from "hooks/usePageTitle";
import { useDevicesPageStyles } from "./DevicesPage.styles";
import CButton from "components/CButton/CButton";
import { DevicesTable } from "./DevicesTable/DevicesTable";
import { useState } from "react";
import { DevicesEditModal } from "./DevicesEditModal/DevicesEditModal";
import { DevicesCreateModal } from "./DevicesCreateModal/DevicesCreateModal";
import { TDeviceType } from "types/types";

const DevicesPage = () => {
  usePageTitle("Управление устройствами");

  const [protocol, setProtocol] = useState<TDeviceType>(null);
  const [isCreateModal, setIsCreateModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);

  const handleEditModal = (protocol: TDeviceType) => {
    setProtocol(protocol);
    setIsEditModal(true);
  };

  const { classes } = useDevicesPageStyles();
  return (
    <MainLayout>
      <Box className={classes.header}>
        <PageTitle title="Управление устройствами" subtitle="Сводная таблица устройств" />
        <CButton
          variant="outlined"
          text="Добавить устройство"
          onClick={() => setIsCreateModal(true)}
        />
      </Box>

      <DevicesTable />

      <DevicesCreateModal
        isOpen={isCreateModal}
        onClose={() => setIsCreateModal(false)}
        openEditModal={handleEditModal}
      />
      <DevicesEditModal
        isOpen={isEditModal}
        protocol={protocol}
        onClose={() => (setIsEditModal(false), setProtocol(null))}
      />
    </MainLayout>
  );
};

export default DevicesPage;
