import { Box } from "@mui/material";
import PageTitle from "components/PageTitle/PageTitle";
import { useServicesEventsStyles } from "./ServicesEvents.styles";
import { BlockUI } from "components/BlockUI/BlockUI";
import { DataTableUI } from "components/DataTableUI/DataTableUI";

export const ServicesEvents = () => {
  const { classes } = useServicesEventsStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <PageTitle
          title="Диагностические сообщения"
          subtitle="Логирование сообщений сервисов"
        />
        <Box className={classes.btnRow}>
          {/* <CIconsButton icon={<Play size={16} />} tooltipText="Запустить все" />
          <CIconsButton icon={<RotateCcw size={16} />} tooltipText="Перезапустить все" />
          <CIconsButton icon={<Square size={16} />} tooltipText="Остановить все" /> */}
        </Box>
      </Box>

      <BlockUI paddingNull>
        <Box className={classes.titleWrapper}>
          {/* <Box className={classes.filter}>
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
          </Box> */}
        </Box>
        <DataTableUI
          data={[]}
          columnsConfig={[]}
          containerBorder
          // scrollToBottom
          // maxHeight={300}
          // loading={isFetch && !dashboard}
          // columnsConfig={columnsConfig}
          // skeletonColumns={columnsConfig.length}
          // skeletonRows={6}
          // data={dashboard?.events || []}
          // renderCell={(columnKey: string, row: IDataTable, rowIndex: number) => {
          //   switch (columnKey) {
          //     case "time":
          //       return dayjs(row.time).format("YYYY-MM-DD HH:mm:ss");
          //     case "chapter":
          //       return (
          //         <Box component="span" className={classes.chapter}>
          //           {row.chapter}
          //         </Box>
          //       );
          //     case "level":
          //       return <EventLevelChip level={row.level} />;
          //     case "message":
          //       return row.message;
          //     default:
          //       return row[columnKey] || "-";
          //   }
          // }}
        />
      </BlockUI>
    </Box>
  );
};
