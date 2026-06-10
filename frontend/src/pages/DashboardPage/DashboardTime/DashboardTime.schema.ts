import { createRequiredString } from "helpers/yupUtils";
import * as yup from "yup";

export enum ETimeFormFields {
  TIME = "time",
}

export interface ITimeForm {
  [ETimeFormFields.TIME]: string;
}

export const timeSchema = yup.object().shape({
  [ETimeFormFields.TIME]: createRequiredString(),
});
