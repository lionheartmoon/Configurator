import {
  createNumberField,
  createRequiredStringField,
  createStringField,
  createStringLengthField,
} from "helpers/yupUtils";
import * as yup from "yup";

export enum ETagEditFormFields {
  NAME = "name",
  INVENT = "invent",
  SERIAL = "serial",
  REGISTER = "register",
  ADDRESS = "address",
  TYPE = "type",
  BYTE_ORDER = "byteOrder",
}

export enum EDeviceEditFormFields {
  NAME = "name",
  IP = "ip",
  PORT = "port",
  DEVICE_ID = "deviceId",
  TAGS = "tags",
}

export interface ITagEditForm {
  [ETagEditFormFields.NAME]: string | null;
  [ETagEditFormFields.INVENT]?: string;
  [ETagEditFormFields.SERIAL]?: string;
  [ETagEditFormFields.ADDRESS]: string | null;
  [ETagEditFormFields.REGISTER]: string | null;
  [ETagEditFormFields.TYPE]: string | null;
  [ETagEditFormFields.BYTE_ORDER]: string | null;
}

export interface IDeviceEditForm {
  [EDeviceEditFormFields.NAME]: string;
  [EDeviceEditFormFields.IP]: string;
  [EDeviceEditFormFields.PORT]: string;
  [EDeviceEditFormFields.DEVICE_ID]: string;
  [EDeviceEditFormFields.TAGS]: ITagEditForm[];
}

export const deviceEditSchema = yup.object().shape({
  [EDeviceEditFormFields.NAME]: createRequiredStringField(2, 30),
  [EDeviceEditFormFields.IP]: createRequiredStringField(7, 15),
  [EDeviceEditFormFields.PORT]: createRequiredStringField(1, 5),
  [EDeviceEditFormFields.DEVICE_ID]: createRequiredStringField(1, 5),
  [EDeviceEditFormFields.TAGS]: yup
    .array()
    .of(
      yup.object().shape({
        [ETagEditFormFields.NAME]: createStringLengthField(2, 30),
        [ETagEditFormFields.INVENT]: createStringField(),
        [ETagEditFormFields.SERIAL]: createStringField(),
        [ETagEditFormFields.REGISTER]: createStringLengthField(2, 30),
        [ETagEditFormFields.ADDRESS]: createNumberField(10),
        [ETagEditFormFields.TYPE]: createStringLengthField(2, 30),
        [ETagEditFormFields.BYTE_ORDER]: createStringLengthField(2, 30),
      })
    )
    .required()
    .min(1, "Минимум 1 тег"),
});
