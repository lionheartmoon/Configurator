import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useSignInPageStyles } from "./SignInPage.styles";
import { LockOutlined } from "@mui/icons-material";
import { appTexts } from "appTexts/appTexts";
import CButton from "components/CButton/CButton";
import FormTextField from "components/FormTextField/FormTextField";
import { FormProvider, useForm } from "react-hook-form";
import { ESignInFormFields, ISignInForm, signInSchema } from "./SignInPage.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import ToggleThemeButton from "components/ToggleThemeButton/ToggleThemeButton";
import { usePageTitle } from "hooks/usePageTitle";
import { useNavigate } from "react-router-dom";
import { routesPath } from "router/routes";
import { useMessage } from "hooks/useMessage";
import { observer } from "mobx-react-lite";
import { useSettingsContext } from "contexts/settingsContext";

const SignInPage = () => {
  usePageTitle("Авторизация");

  const { setIsAuth } = useSettingsContext();

  const navigate = useNavigate();
  const { message } = useMessage();

  const formMethods = useForm<ISignInForm>({
    resolver: yupResolver(signInSchema),
  });

  const { handleSubmit } = formMethods;

  const submitForm = (formData: ISignInForm) => {
    const { password } = formData;

    if (password === process.env.REACT_APP_AUTH_PASSWORD) {
      setIsAuth(true);

      navigate(routesPath.DASHBOARD);
    } else {
      message.error("Неверный пароль");
    }
  };

  const { classes } = useSignInPageStyles();
  return (
    <Box className={classes.root}>
      <Container component="main" maxWidth="xs" className={classes.main}>
        <CssBaseline />
        <Box className={classes.auth}>
          <Box className={classes.themeBtn}>
            <ToggleThemeButton />
          </Box>
          <Box className={classes.icon}>
            <LockOutlined />
          </Box>
          <Typography component="h1" variant="h5">
            {appTexts.signInPage.title}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(submitForm)}
            noValidate
            sx={{ mt: 1 }}
            className={classes.form}
          >
            <FormProvider {...formMethods}>
              <FormTextField
                fullWidth
                type="password"
                fieldName={ESignInFormFields.PASSWORD}
                label={appTexts.signInPage.password}
              />
            </FormProvider>

            <CButton
              type="submit"
              size="medium"
              fullWidth
              variant="contained"
              // loading={isFetchLoading}
              className={classes.submitBtn}
              text={appTexts.signInPage.submitBtn}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default observer(SignInPage);
