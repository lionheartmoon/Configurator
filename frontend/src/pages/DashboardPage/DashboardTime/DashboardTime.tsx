import { Box, IconButton, Typography } from "@mui/material";
import { BlockContainer } from "components/BlockContainer/BlockContainer";
import { useDashboardTimeStyles } from "./DashboardTime.styles";
import { FormProvider, useForm } from "react-hook-form";
import { ETimeFormFields, ITimeForm, timeSchema } from "./DashboardTime.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextField from "components/FormTextField/FormTextField";
import CButton from "components/CButton/CButton";
import { RotateCcw } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useDashboardContext } from "contexts/dashboardContext";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useMessage } from "hooks/useMessage";

export const DashboardTime = observer(() => {
  const { dashboard, isTimeFetch, setModuleTime } = useDashboardContext();
  const { message } = useMessage();

  const formMethods = useForm<ITimeForm>({
    resolver: yupResolver(timeSchema),
    defaultValues: { time: dayjs(dashboard?.time).format("DD.MM.YYYY, HH:mm") },
  });

  const { setValue, handleSubmit } = formMethods;

  useEffect(() => {
    setValue(ETimeFormFields.TIME, dayjs(dashboard?.time).format("DD.MM.YYYY, HH:mm"));
  }, [dashboard?.time]);

  const sendTime = () => {
    const time = dayjs().add(5, "hour").toISOString();

    setModuleTime(time).then(({ data, error }) => {
      if (data) {
        message.success("Время модуля синхронизировано с временем устройством");
      } else if (error) {
        message.error(error || "Ошибка синхронизации");
      }
    });
  };

  const { classes } = useDashboardTimeStyles();
  return (
    <BlockContainer height={120}>
      <Typography className={classes.title}>Текущее время модуля</Typography>
      <Box
        component="form"
        className={classes.container}
        onSubmit={handleSubmit(sendTime)}
      >
        <FormProvider {...formMethods}>
          <FormTextField
            fullWidth
            readOnly
            margin="none"
            fieldName={ETimeFormFields.TIME}
            endAdornment={
              <IconButton edge="end">
                <RotateCcw size={14} />
              </IconButton>
            }
            disabled={isTimeFetch}
          />
          <CButton
            variant="contained"
            text="Синхронизировать"
            type="submit"
            size="medium"
            loading={isTimeFetch}
          />
        </FormProvider>
      </Box>
    </BlockContainer>
  );
});
