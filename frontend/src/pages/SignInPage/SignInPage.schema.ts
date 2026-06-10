import { createRequiredStringField } from "helpers/yupUtils";
import * as yup from "yup";

export enum ESignInFormFields {
  PASSWORD = "password",
}

export interface ISignInForm {
  [ESignInFormFields.PASSWORD]: string;
}

export const signInSchema = yup.object().shape({
  [ESignInFormFields.PASSWORD]: createRequiredStringField(4, 15),
});
