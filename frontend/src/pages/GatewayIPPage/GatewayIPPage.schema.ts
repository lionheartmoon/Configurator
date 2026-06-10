import { createRequiredStringField } from "helpers/yupUtils";
import * as yup from "yup";

export enum EGatewayIPFormFields {
  IP = "ip",
}

export interface IGatewayIPForm {
  [EGatewayIPFormFields.IP]: string;
}

export const gatewayIPSchema = yup.object().shape({
  [EGatewayIPFormFields.IP]: createRequiredStringField(4, 300),
});
