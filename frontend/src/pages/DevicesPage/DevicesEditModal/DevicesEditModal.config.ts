import { ColumnsConfig } from "components/DataTableServiceUI/DataTableServiceUI.types";
import { EByteOrder, EDataType, EFunctionCode, IOption } from "types/types";

export const columnsConfig: ColumnsConfig[] = [
  { title: "Название", key: "name", align: "left" },
  { title: "Инвент. №", key: "invent", align: "left" },
  { title: "Серийн. №", key: "serial", align: "left" },
  { title: "Адрес", key: "address", align: "left" },
  { title: "Тип регистра", key: "register", align: "left", width: 200 },
  { title: "Тип данных", key: "dataType", align: "left", width: 100 },
  { title: "Порядок байтов", key: "byteOrder", align: "left", width: 125 },
  { title: "Действия", key: "actions", align: "center" },
];

export const functionCodeOptions: IOption[] = [
  { label: "HOLDING_REGISTERS", value: EFunctionCode.HOLDING_REGISTERS },
  { label: "INPUT_REGISTERS", value: EFunctionCode.INPUT_REGISTERS },
  { label: "COILS", value: EFunctionCode.COILS },
  { label: "DISCRETE_INPUTS", value: EFunctionCode.DISCRETE_INPUTS },
];

export const mainDataTypeOptions: IOption[] = [
  { label: "INT16", value: EDataType.INT16 },
  { label: "UINT16", value: EDataType.UINT16 },
  { label: "INT32", value: EDataType.INT32 },
  { label: "UINT32", value: EDataType.UINT32 },
  { label: "INT64", value: EDataType.INT64 },
  { label: "UINT64", value: EDataType.UINT64 },
  { label: "FLOAT32", value: EDataType.FLOAT32 },
  { label: "FLOAT64", value: EDataType.FLOAT64 },
];

export const booleanDataTypeOptions: IOption[] = [
  { label: "BOOL", value: EDataType.BOOL },
];

export const sixteenByteDataTypeOptions: IOption[] = [
  { label: "Отсутствует", value: "null" },
];

export const thirtyTwoByteDataTypeOptions: IOption[] = [
  { value: EByteOrder.AB, label: "AB" },
  { value: EByteOrder.BA, label: "BA" },
];

export const byteOrderOptions: IOption[] = [
  { label: "ABCD", value: EByteOrder.ABCD },
  { label: "DCBA", value: EByteOrder.DCBA },
  { label: "BADC", value: EByteOrder.BADC },
  { label: "CDAB", value: EByteOrder.CDAB },
];
