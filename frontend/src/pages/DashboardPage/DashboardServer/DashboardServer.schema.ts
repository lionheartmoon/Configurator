import { createIPField } from "helpers/yupUtils";
import * as yup from "yup";

export enum EServerFormFields {
  SERVER = "server",
}

export interface IServerForm {
  [EServerFormFields.SERVER]: string;
}

export const serverSchema = yup.object().shape({
  [EServerFormFields.SERVER]: createIPField(),
});
