import { MainLayout } from "components/MainLayout/MainLayout";
import PageTitle from "components/PageTitle/PageTitle";
import { useNetworkSettingsPageStyles } from "./NetworkSettingsPage.styles";
import { Box } from "@mui/material";
import { LANNetworkSettings } from "./LANNetworkSettings/LANNetworkSettings";
import { WiFiNetworkSettings } from "./WiFiNetworkSettings/WiFiNetworkSettings";
import { usePageTitle } from "hooks/usePageTitle";
import { observer } from "mobx-react-lite";
import { useNetworkSettingsContext } from "contexts/networkSettingsContext";
import { useEffect } from "react";

const NetworkSettingsPage = () => {
  usePageTitle("TCP/IP Настройки");

  const { getNetworkSettings } = useNetworkSettingsContext();

  useEffect(() => {
    getNetworkSettings();
  }, []);

  const { classes } = useNetworkSettingsPageStyles();
  return (
    <MainLayout>
      <PageTitle title="TCP/IP Настройки" subtitle="Изменение настроек сети модуля" />
      <Box className={classes.container}>
        <LANNetworkSettings />
        <WiFiNetworkSettings />
      </Box>
    </MainLayout>
  );
};

export default observer(NetworkSettingsPage);
