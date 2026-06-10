import { Box, Typography } from "@mui/material";
import { BlockContainer } from "components/BlockContainer/BlockContainer";
import { FormProvider, useForm } from "react-hook-form";
import { EServerFormFields, IServerForm, serverSchema } from "./DashboardServer.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextField from "components/FormTextField/FormTextField";
import CButton from "components/CButton/CButton";
import { observer } from "mobx-react-lite";
import { useDashboardContext } from "contexts/dashboardContext";
import { useEffect } from "react";
import { useMessage } from "hooks/useMessage";

export const DashboardServer = observer(() => {
  const { dashboard, isServerFetch, setServerURL } = useDashboardContext();
  const { message } = useMessage();

  const formMethods = useForm<IServerForm>({
    resolver: yupResolver(serverSchema),
    defaultValues: { server: dashboard?.serverIP },
  });

  const { setValue, handleSubmit } = formMethods;

  useEffect(() => {
    setValue(EServerFormFields.SERVER, dashboard?.serverIP || "");
  }, [dashboard?.serverIP]);

  const sendUrl = (formData: IServerForm) => {
    const { server } = formData;

    setServerURL(server).then(({ data, error }) => {
      if (data) {
        message.success("IP адрес сервера изменен");
      } else if (error) {
        message.error(error || "Ошибка сохранения");
      }
    });
  };

  return (
    <BlockContainer height={120}>
      <Typography sx={{ fontWeight: 500 }}>IP адрес сервера</Typography>
      <FormProvider {...formMethods}>
        <Box
          component="form"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
          onSubmit={handleSubmit(sendUrl)}
        >
          <FormTextField
            fullWidth
            margin="none"
            disabled={isServerFetch}
            fieldName={EServerFormFields.SERVER}
          />
          <CButton
            variant="contained"
            text="Сохранить"
            type="submit"
            size="medium"
            loading={isServerFetch}
          />
        </Box>
      </FormProvider>
    </BlockContainer>
  );
});
