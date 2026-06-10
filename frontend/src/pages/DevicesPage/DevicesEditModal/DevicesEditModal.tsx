import FormDialog from "components/FormDialog/FormDialog";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { TDeviceType } from "types/types";
import {
  deviceEditSchema,
  EDeviceEditFormFields,
  IDeviceEditForm,
} from "./DevicesEditModal.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextField from "components/FormTextField/FormTextField";
import { appTexts } from "appTexts/appTexts";
import { BlockUI } from "components/BlockUI/BlockUI";
import { Box, Typography } from "@mui/material";
import { useDevicesEditModalStyles } from "./DevicesEditModal.styles";
import { DataTableUI } from "components/DataTableUI/DataTableUI";
import { columnsConfig, functionCodeOptions } from "./DevicesEditModal.config";
import { IDataTable } from "components/DataTableServiceUI/DataTableServiceUI.types";
import { CIconsButton } from "components/ui/CIconsButton/CIconsButton";
import { CirclePlus, Download, Trash2, Upload } from "lucide-react";
import { FormSelect } from "components/FormSelect/FormSelect";
import { handleRegister, handleType } from "utlis/devices";
import { IDevice } from "stores/devicesStore";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  protocol: TDeviceType;
  editDevice?: IDevice | null;
  onClose: () => void;
}

export const DevicesEditModal = ({ isOpen, protocol, editDevice, onClose }: Props) => {
  const defaultTag = {
    name: null,
    address: null,
    byteOrder: null,
    register: null,
    type: null,
  };

  const formMethods = useForm<IDeviceEditForm>({
    resolver: yupResolver(deviceEditSchema),
    defaultValues: {
      tags: [defaultTag],
    },
  });

  const {
    control,
    formState: { isDirty, errors },
    watch,
    handleSubmit,
    reset,
  } = formMethods;

  const {
    fields,
    append: appendField,
    remove: removeField,
  } = useFieldArray({
    control,
    name: EDeviceEditFormFields.TAGS,
  });

  const submitForm = (formData: IDeviceEditForm) => {
    console.log(formData);

    // axios.post(`http://192.168.102.72/device`, formData);
  };

  useEffect(() => {
    if (!editDevice) return;

    const { name, deviceId, ip, port } = editDevice;

    reset({
      name,
      deviceId,
      ip,
      port,
    });
  }, [editDevice]);

  const { classes } = useDevicesEditModalStyles();
  return (
    <FormDialog
      open={isOpen}
      onCloseDialog={onClose}
      title={`${!!editDevice ? "Редактирование" : "Создание"} ${protocol?.toUpperCase()} устройства`}
      maxWidth="lg"
      disabledOk={!isDirty}
      onSubmit={handleSubmit(submitForm)}
    >
      <Box className={classes.container}>
        <FormProvider {...formMethods}>
          <Box className={classes.inputs}>
            <FormTextField
              fullWidth
              fieldName={EDeviceEditFormFields.NAME}
              label={appTexts.devicesPage.edit.labels.name}
            />
            <FormTextField
              fullWidth
              fieldName={EDeviceEditFormFields.DEVICE_ID}
              label={appTexts.devicesPage.edit.labels.deviceId}
            />
            <FormTextField
              fullWidth
              fieldName={EDeviceEditFormFields.IP}
              label={appTexts.devicesPage.edit.labels.ip}
            />
            <FormTextField
              fullWidth
              fieldName={EDeviceEditFormFields.PORT}
              label={appTexts.devicesPage.edit.labels.port}
            />
          </Box>

          <Box className={classes.tagsRow}>
            <Typography className={classes.tags}>Конфигурация Modbus тегов</Typography>
            <Box className={classes.tableRow}>
              <CIconsButton
                icon={<CirclePlus size={16} />}
                tooltipText="Добавить тег"
                onClick={() => appendField(defaultTag)}
              />
              <CIconsButton
                icon={<Download size={16} />}
                tooltipText="Сохранить шаблон"
              />
              <CIconsButton icon={<Upload size={16} />} tooltipText="Загрузить шаблон" />
            </Box>
          </Box>

          <BlockUI paddingNull>
            <DataTableUI
              columnsConfig={columnsConfig}
              data={fields.map(({ name, address, byteOrder, register, type }) => ({
                name,
                address,
                byteOrder,
                register,
                type,
              }))}
              renderCell={(columnKey: string, row: IDataTable, rowIndex: number) => {
                const rowRegister = watch(`tags.${rowIndex}.register`);
                const rowType = watch(`tags.${rowIndex}.type`);

                const typeOptions = handleRegister(rowRegister);
                const byteOptions = handleType(rowType);
                switch (columnKey) {
                  case "name":
                    return (
                      <FormTextField
                        fullWidth
                        fieldName={`tags[${rowIndex}].name`}
                        label={appTexts.devicesPage.edit.labels.tag.name}
                        margin="none"
                      />
                    );
                  case "invent":
                    return (
                      <FormTextField
                        fullWidth
                        fieldName={`tags[${rowIndex}].invent`}
                        label={appTexts.devicesPage.edit.labels.tag.invent}
                        margin="none"
                      />
                    );
                  case "serial":
                    return (
                      <FormTextField
                        fullWidth
                        fieldName={`tags[${rowIndex}].serial`}
                        label={appTexts.devicesPage.edit.labels.tag.serial}
                        margin="none"
                      />
                    );

                  case "address":
                    return (
                      <FormTextField
                        fullWidth
                        fieldName={`tags[${rowIndex}].address`}
                        label={appTexts.devicesPage.edit.labels.tag.address}
                        margin="none"
                      />
                    );

                  case "register":
                    return (
                      <FormSelect
                        fullWidth
                        margin="none"
                        fieldName={`tags[${rowIndex}].register`}
                        options={functionCodeOptions}
                        defaultValue={functionCodeOptions[0].value}
                        label={appTexts.devicesPage.edit.labels.tag.register}
                      />
                    );

                  case "dataType":
                    return (
                      <FormSelect
                        fullWidth
                        margin="none"
                        fieldName={`tags[${rowIndex}].type`}
                        options={typeOptions}
                        label={appTexts.devicesPage.edit.labels.tag.type}
                        disabled={rowRegister === null}
                      />
                    );

                  case "byteOrder":
                    return (
                      <FormSelect
                        fullWidth
                        margin="none"
                        fieldName={`tags[${rowIndex}].byteOrder`}
                        options={byteOptions}
                        label={appTexts.devicesPage.edit.labels.tag.byteOrder}
                        disabled={rowType === null}
                      />
                    );

                  case "actions":
                    return (
                      <Box component="span" className={classes.iconBox}>
                        <CIconsButton
                          icon={<Trash2 size={16} />}
                          onClick={() => removeField(rowIndex)}
                          disabled={fields.length === 1}
                        />
                      </Box>
                    );
                }
              }}
            />
          </BlockUI>
        </FormProvider>
      </Box>
    </FormDialog>
  );
};
