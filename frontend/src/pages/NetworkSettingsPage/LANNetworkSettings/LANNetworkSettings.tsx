import { Box, Typography } from "@mui/material";
import { BlockContainer } from "components/BlockContainer/BlockContainer";
import { FormProvider, useForm } from "react-hook-form";
import { ELANSettingsFormFields, LANSettingsSchema } from "./LANNetworkSettings.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSelect } from "components/FormSelect/FormSelect";
import { networkMode } from "../NetworkSettingsPage.types";
import FormTextField from "components/FormTextField/FormTextField";
import { appTexts } from "appTexts/appTexts";
import { useLANNetworkSettingsStyles } from "./LANNetworkSettings.styles";
import CButton from "components/CButton/CButton";
import { ENetworkMode } from "types/types";
import { observer } from "mobx-react-lite";
import { useNetworkSettingsContext } from "contexts/networkSettingsContext";
import { useEffect } from "react";

export const LANNetworkSettings = observer(() => {
  const { isFetch, lan } = useNetworkSettingsContext();

  const formMethods = useForm({
    // <ILANSettingsForm>
    resolver: yupResolver(LANSettingsSchema),
    defaultValues: {
      mode: ENetworkMode.DHCP,
    },
  });

  const { watch, reset } = formMethods;

  const currentMode = watch(ELANSettingsFormFields.MODE);
  const isDHCPMode = currentMode === ENetworkMode.DHCP;

  useEffect(() => {
    if (!lan) return;

    const { alterDNS, gateway, ip, mainDNS, mask, mode } = lan;

    reset({
      mode,
      ip: ip ?? "",
      mask: mask ?? "",
      gateway: gateway ?? "",
      mainDNS: mainDNS ?? "",
      alterDNS: alterDNS ?? "",
    });
  }, [lan, reset]);

  const { classes } = useLANNetworkSettingsStyles();
  return (
    <BlockContainer>
      <Typography sx={{ fontWeight: 500 }}>Проводная сеть (LAN)</Typography>
      <FormProvider {...formMethods}>
        <FormSelect
          fullWidth
          margin="none"
          fieldName={ELANSettingsFormFields.MODE}
          label={appTexts.networkSettings.labels.mode}
          options={networkMode}
          loading={isFetch}
        />
        <FormTextField
          fullWidth
          margin="none"
          fieldName={ELANSettingsFormFields.IP}
          label={appTexts.networkSettings.labels.ip}
          disabled={isDHCPMode}
          isLoading={isFetch}
          shrink={!!watch(ELANSettingsFormFields.IP)}
        />
        <FormTextField
          fullWidth
          margin="none"
          fieldName={ELANSettingsFormFields.MASK}
          label={appTexts.networkSettings.labels.mask}
          disabled={isDHCPMode}
          isLoading={isFetch}
          shrink={!!watch(ELANSettingsFormFields.MASK)}
        />
        <FormTextField
          fullWidth
          margin="none"
          fieldName={ELANSettingsFormFields.GATEWAY}
          label={appTexts.networkSettings.labels.gateway}
          disabled={isDHCPMode}
          isLoading={isFetch}
          shrink={!!watch(ELANSettingsFormFields.GATEWAY)}
        />
        <Box className={classes.row}>
          <FormTextField
            fullWidth
            margin="none"
            fieldName={ELANSettingsFormFields.MAIN_DNS}
            label={appTexts.networkSettings.labels.mainDNS}
            disabled={isDHCPMode}
            isLoading={isFetch}
            shrink={!!watch(ELANSettingsFormFields.MAIN_DNS)}
          />
          <FormTextField
            fullWidth
            margin="none"
            fieldName={ELANSettingsFormFields.ALTER_DNS}
            label={appTexts.networkSettings.labels.alterDNS}
            disabled={isDHCPMode}
            isLoading={isFetch}
            shrink={!!watch(ELANSettingsFormFields.ALTER_DNS)}
          />
        </Box>
        <CButton
          variant="outlined"
          text="Сохранить настройки LAN"
          sx={{ alignSelf: "center" }}
          loading={isFetch}
        />
      </FormProvider>
    </BlockContainer>
  );
});
