import { createRequiredString, createServiceStatusField } from "helpers/yupUtils";
import { EServiceStatus } from "types/types";
import * as yup from "yup";

export enum EServiceTableFormFields {
  SERVICE = "service",
  STATUS = "status",
  LIMIT = "limit",
}

export interface IServiceTableForm {
  [EServiceTableFormFields.SERVICE]: string;
  [EServiceTableFormFields.STATUS]: EServiceStatus;
  [EServiceTableFormFields.LIMIT]: string;
}

export const serviceTableSchema = yup.object().shape({
  [EServiceTableFormFields.SERVICE]: createRequiredString(),
  [EServiceTableFormFields.STATUS]: createServiceStatusField(),
  [EServiceTableFormFields.LIMIT]: createRequiredString(),
});
