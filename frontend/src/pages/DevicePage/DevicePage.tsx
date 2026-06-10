import { Box, Grid } from "@mui/material";
import { MainLayout } from "components/MainLayout/MainLayout";
import PageTitle from "components/PageTitle/PageTitle";
import { DeviceInfo } from "./DeviceInfo/DeviceInfo";
import { DeviceTags } from "./DeviceTags/DeviceTags";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDeviceContext } from "contexts/devicesContext";
import { observer } from "mobx-react-lite";
import { useDevicePageStyles } from "./DevicePage.styles";
import CButton from "components/CButton/CButton";
import { routesPath } from "router/routes";

const DevicePage = () => {
  const { device, getDevice } = useDeviceContext();
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    if (!id) return;

    getDevice(id);
  }, [id]);

  const { classes } = useDevicePageStyles();
  return (
    <MainLayout>
      <Box className={classes.header}>
        <PageTitle
          title={`Мониторинг устройства: ${device?.name ?? "-"}`}
          subtitle="Полная информация об устройстве вместе с мониторингом тегов"
        />
        <CButton
          variant="outlined"
          text="Назад"
          onClick={() => nav(routesPath.DEVICES)}
        />
      </Box>

      <Grid container columns={12} spacing={2}>
        <Grid size={{ xs: 12, md: 5 }}>
          <DeviceInfo />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <DeviceTags />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default observer(DevicePage);
