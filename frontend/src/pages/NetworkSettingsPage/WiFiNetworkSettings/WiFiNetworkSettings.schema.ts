import {
  createNetworkModeField,
  createRequiredString,
  createStringField,
} from "helpers/yupUtils";
import { ENetworkMode } from "types/types";
import * as yup from "yup";

export enum EWiFiSettingsFormFields {
  NAME = "name",
  PASSWORD = "password",
  MODE = "mode",
  IP = "ip",
  MASK = "mask",
  GATEWAY = "gateway",
  MAIN_DNS = "mainDNS",
  ALTER_DNS = "alterDNS",
}

export interface IWiFiSettingsForm {
  [EWiFiSettingsFormFields.NAME]: string;
  [EWiFiSettingsFormFields.PASSWORD]?: string;
  [EWiFiSettingsFormFields.MODE]: ENetworkMode;
  [EWiFiSettingsFormFields.IP]: string;
  [EWiFiSettingsFormFields.MASK]: string;
  [EWiFiSettingsFormFields.GATEWAY]: string;
  [EWiFiSettingsFormFields.MAIN_DNS]: string;
  [EWiFiSettingsFormFields.ALTER_DNS]?: string;
}

export const WiFiSettingsSchema = yup.object().shape({
  [EWiFiSettingsFormFields.NAME]: createRequiredString(),
  [EWiFiSettingsFormFields.PASSWORD]: createStringField(),
  [EWiFiSettingsFormFields.MODE]: createNetworkModeField(),
  [EWiFiSettingsFormFields.IP]: createRequiredString(),
  [EWiFiSettingsFormFields.MASK]: createRequiredString(),
  [EWiFiSettingsFormFields.GATEWAY]: createRequiredString(),
  [EWiFiSettingsFormFields.MAIN_DNS]: createRequiredString(),
  [EWiFiSettingsFormFields.ALTER_DNS]: createStringField(),
});
