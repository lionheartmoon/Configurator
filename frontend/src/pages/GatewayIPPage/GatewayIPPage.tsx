import { Box, Container, CssBaseline, Typography } from "@mui/material";
import CButton from "components/CButton/CButton";
import FormTextField from "components/FormTextField/FormTextField";
import ToggleThemeButton from "components/ToggleThemeButton/ToggleThemeButton";
import { usePageTitle } from "hooks/usePageTitle";
import { FormProvider, useForm } from "react-hook-form";
import { useGatewayIPPageStyles } from "./GatewayIPPage.styles";
import {
  EGatewayIPFormFields,
  gatewayIPSchema,
  IGatewayIPForm,
} from "./GatewayIPPage.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { appTexts } from "appTexts/appTexts";
import { Unplug } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useSettingsContext } from "contexts/settingsContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { routesPath } from "router/routes";
import { useMessage } from "hooks/useMessage";

const GatewayIPPage = () => {
  usePageTitle("Подключение к шлюзу");
  const { setIP } = useSettingsContext();

  const { message } = useMessage();
  const navigate = useNavigate();

  const formMethods = useForm<IGatewayIPForm>({
    resolver: yupResolver(gatewayIPSchema),
  });

  const { handleSubmit } = formMethods;

  const submitIP = (formData: IGatewayIPForm) => {
    const { ip } = formData;

    axios
      .get(`http://${ip}:9000/check`)
      .then(({ status, data }) => {
        const online = data.online;

        if (!!online) {
          setIP(ip);
          navigate(routesPath.SIGN_IN);
        } else {
          message.error("Модуль с указанным IP не отвечает");
        }
      })
      .catch((error) => {
        message.error("Ошибка подключения");
      });
  };

  const { classes } = useGatewayIPPageStyles();
  return (
    <Box className={classes.root}>
      <Container component="main" maxWidth="xs" className={classes.main}>
        <CssBaseline />
        <Box className={classes.auth}>
          <Box className={classes.themeBtn}>
            <ToggleThemeButton />
          </Box>
          <Box className={classes.icon}>
            <Unplug />
          </Box>
          <Typography component="h1" variant="h5">
            {appTexts.gatewayIP.title}
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit(submitForm)}
            noValidate
            sx={{ mt: 1 }}
            className={classes.form}
          >
            <FormProvider {...formMethods}>
              <FormTextField
                fullWidth
                fieldName={EGatewayIPFormFields.IP}
                label={appTexts.gatewayIP.ip}
              />
            </FormProvider>

            <CButton
              fullWidth
              type="submit"
              size="medium"
              variant="contained"
              // loading={isFetchLoading}
              className={classes.submitBtn}
              text={appTexts.gatewayIP.submitBtn}
              onClick={handleSubmit(submitIP)}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default observer(GatewayIPPage);
