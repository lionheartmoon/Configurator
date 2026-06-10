import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import {
  EWiFiSettingsFormFields,
  WiFiSettingsSchema,
} from "./WiFiNetworkSettings.schema";
import { ENetworkMode, IOption, IOptions } from "types/types";
import { BlockContainer } from "components/BlockContainer/BlockContainer";
import { Box, Typography } from "@mui/material";
import { FormSelect } from "components/FormSelect/FormSelect";
import { appTexts } from "appTexts/appTexts";
import { networkMode } from "../NetworkSettingsPage.types";
import FormTextField from "components/FormTextField/FormTextField";
import { useWiFiNetworkSettingsStyles } from "./WiFiNetworkSettings.styles";
import CButton from "components/CButton/CButton";
import { observer } from "mobx-react-lite";
import { useNetworkSettingsContext } from "contexts/networkSettingsContext";
import { useEffect, useMemo, useState } from "react";

export const WiFiNetworkSettings = observer(() => {
  const { isFetch, wifi } = useNetworkSettingsContext();

  const formMethods = useForm({
    resolver: yupResolver(WiFiSettingsSchema),
    defaultValues: {
      name: "Не выбрано",
      mode: ENetworkMode.DHCP,
    },
  });

  const { watch, reset } = formMethods;

  const currentMode = watch(EWiFiSettingsFormFields.MODE);
  const currentWiFi = watch(EWiFiSettingsFormFields.NAME);

  const isDHCPMode = currentMode === ENetworkMode.DHCP;
  const isWiFiOn = currentWiFi === "Не выбрано";

  useEffect(() => {
    if (!wifi) return;

    const { alterDNS, gateway, ip, mainDNS, mask, mode, name, password } = wifi;

    reset({
      mode,
      name: name ?? "Не выбрано",
      password: password ?? undefined,
      ip: ip ?? "",
      mask: mask ?? "",
      gateway: gateway ?? "",
      mainDNS: mainDNS ?? "",
      alterDNS: alterDNS ?? "",
    });
  }, [wifi, reset]);

  const networks = useMemo<IOptions[]>(
    () => [
      { label: "Не выбрано", value: "Не выбрано" },
      ...(wifi?.available_networks.map((item) => ({ label: item, value: item })) ?? []),
    ],
    [wifi?.available_networks]
  );

  const { classes } = useWiFiNetworkSettingsStyles();
  return (
    <BlockContainer>
      <Typography sx={{ fontWeight: 500 }}>Беспроводная сеть (Wi-Fi)</Typography>
      <FormProvider {...formMethods}>
        <Box className={classes.row}>
          <FormSelect
            fullWidth
            margin="none"
            defaultValue="Не выбрано"
            fieldName={EWiFiSettingsFormFields.NAME}
            label={appTexts.networkSettings.labels.name}
            options={networks}
            loading={isFetch}
          />
          <FormTextField
            fullWidth
            margin="none"
            fieldName={EWiFiSettingsFormFields.PASSWORD}
            label={appTexts.networkSettings.labels.password}
            disabled={isWiFiOn}
            isLoading={isFetch}
            shrink={!!watch(EWiFiSettingsFormFields.PASSWORD)}
          />
        </Box>
        <FormSelect
          fullWidth
          margin="none"
          fieldName={EWiFiSettingsFormFields.MODE}
          label={appTexts.networkSettings.labels.mode}
          options={networkMode}
          loading={isFetch}
        />
        <FormTextField
          fullWidth
          margin="none"
          fieldName={EWiFiSettingsFormFields.IP}
          label={appTexts.networkSettings.labels.ip}
          disabled={isDHCPMode}
          isLoading={isFetch}
          shrink={!!watch(EWiFiSettingsFormFields.IP)}
        />
        <Box className={classes.row}>
          <FormTextField
            fullWidth
            margin="none"
            fieldName={EWiFiSettingsFormFields.MASK}
            label={appTexts.networkSettings.labels.mask}
            disabled={isDHCPMode}
            isLoading={isFetch}
            shrink={!!watch(EWiFiSettingsFormFields.MASK)}
          />
          <FormTextField
            fullWidth
            margin="none"
            fieldName={EWiFiSettingsFormFields.GATEWAY}
            label={appTexts.networkSettings.labels.gateway}
            disabled={isDHCPMode}
            isLoading={isFetch}
            shrink={!!watch(EWiFiSettingsFormFields.GATEWAY)}
          />
        </Box>
        <Box className={classes.row}>
          <FormTextField
            fullWidth
            margin="none"
            fieldName={EWiFiSettingsFormFields.MAIN_DNS}
            label={appTexts.networkSettings.labels.mainDNS}
            disabled={isDHCPMode}
            isLoading={isFetch}
            shrink={!!watch(EWiFiSettingsFormFields.MAIN_DNS)}
          />
          <FormTextField
            fullWidth
            margin="none"
            fieldName={EWiFiSettingsFormFields.ALTER_DNS}
            label={appTexts.networkSettings.labels.alterDNS}
            disabled={isDHCPMode}
            isLoading={isFetch}
            shrink={!!watch(EWiFiSettingsFormFields.ALTER_DNS)}
          />
        </Box>
        <CButton
          variant="outlined"
          text="Сохранить настройки Wi-Fi"
          sx={{ alignSelf: "center" }}
          loading={isFetch}
        />
      </FormProvider>
    </BlockContainer>
  );
});
