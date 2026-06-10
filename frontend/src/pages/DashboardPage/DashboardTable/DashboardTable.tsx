import { BlockUI } from "components/BlockUI/BlockUI";
import { columnsConfig } from "./DashboardTable.config";
import { Box, Typography } from "@mui/material";
import { useDashboardTableStyles } from "./DashboardTable.styles";
import { FormProvider, useForm } from "react-hook-form";
import {
  EServiceTableFormFields,
  IServiceTableForm,
  serviceTableSchema,
} from "./DashboardTable.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSelect } from "components/FormSelect/FormSelect";
import { EEventLimit, EEventStatus, EServiceStatus, IOption } from "types/types";
import { DataTableUI } from "components/DataTableUI/DataTableUI";
import { observer } from "mobx-react-lite";
import { useDashboardContext } from "contexts/dashboardContext";
import { IDataTable } from "components/DataTableServiceUI/DataTableServiceUI.types";
import dayjs from "dayjs";
import { EventLevelChip } from "components/EventLevelChip/EventLevelChip";
import { useEffect, useMemo } from "react";
import { appTexts } from "appTexts/appTexts";

interface Props {
  setService: (service: string | undefined) => void;
  setStatus: (status: EServiceStatus | undefined) => void;
  setLimit: (limit: EEventLimit | undefined) => void;
}

export const DashboardTable = observer(({ setLimit, setService, setStatus }: Props) => {
  const { services, dashboard, isFetch } = useDashboardContext();

  const defaultValues = {
    [EServiceTableFormFields.SERVICE]: "ALL",
    [EServiceTableFormFields.STATUS]: EServiceStatus.ALL,
    [EServiceTableFormFields.LIMIT]: EEventLimit.FIFTY,
  };

  const formMethods = useForm<IServiceTableForm>({
    resolver: yupResolver(serviceTableSchema),
    defaultValues,
  });

  const { watch } = formMethods;

  const service = watch(EServiceTableFormFields.SERVICE);
  const status = watch(EServiceTableFormFields.STATUS);
  const limit = watch(EServiceTableFormFields.LIMIT);

  useEffect(() => {
    setService(service === "ALL" ? undefined : service);
    setStatus(status === "ALL" ? undefined : status);
    setLimit(limit as EEventLimit);
  }, [service, status, limit]);

  const serviceOptions: IOption[] = useMemo(
    () => [{ label: "Все", value: "ALL" }, ...services],
    [services]
  );

  const statusOptions: IOption[] = useMemo(
    () => [
      { value: "ALL", label: "Все" },
      ...Object.entries(EEventStatus).map((status) => ({
        value: status[0],
        label: appTexts.eventStatus[status[0] as EEventStatus],
      })),
    ],
    []
  );

  const limitOptions: IOption[] = useMemo(
    () => [
      ...Object.entries(EEventLimit).map((limit) => ({
        value: limit[0],
        label: appTexts.eventLimit[limit[0] as EEventLimit],
      })),
    ],
    []
  );

  const { classes } = useDashboardTableStyles();
  return (
    <BlockUI paddingNull>
      <Box className={classes.titleWrapper}>
        <Typography className={classes.title}>Диагностические сообщения</Typography>
        <Box className={classes.filter}>
          <FormProvider {...formMethods}>
            <FormSelect
              margin="none"
              fieldName={EServiceTableFormFields.SERVICE}
              label="Сервис"
              options={serviceOptions}
              rootClassName={classes.select}
            />
            <FormSelect
              margin="none"
              fieldName={EServiceTableFormFields.STATUS}
              label="Статус"
              options={statusOptions}
              rootClassName={classes.select}
            />
            <FormSelect
              margin="none"
              fieldName={EServiceTableFormFields.LIMIT}
              label="Лимит"
              options={limitOptions}
              rootClassName={classes.select}
            />
          </FormProvider>
        </Box>
      </Box>
      <DataTableUI
        containerBorder
        scrollToBottom
        maxHeight={300}
        loading={isFetch && !dashboard}
        columnsConfig={columnsConfig}
        skeletonColumns={columnsConfig.length}
        skeletonRows={6}
        data={dashboard?.events || []}
        renderCell={(columnKey: string, row: IDataTable, rowIndex: number) => {
          switch (columnKey) {
            case "time":
              return dayjs(row.time).format("YYYY-MM-DD HH:mm:ss");
            case "chapter":
              return (
                <Box component="span" className={classes.chapter}>
                  {row.chapter}
                </Box>
              );
            case "level":
              return <EventLevelChip level={row.level} />;
            case "message":
              return row.message;
            default:
              return row[columnKey] || "-";
          }
        }}
      />
    </BlockUI>
  );
});
