import {
  createNetworkModeField,
  createRequiredString,
  createStringField,
} from "helpers/yupUtils";
import { ENetworkMode } from "types/types";
import * as yup from "yup";

export enum ELANSettingsFormFields {
  MODE = "mode",
  IP = "ip",
  MASK = "mask",
  GATEWAY = "gateway",
  MAIN_DNS = "mainDNS",
  ALTER_DNS = "alterDNS",
}

export interface ILANSettingsForm {
  [ELANSettingsFormFields.MODE]: ENetworkMode;
  [ELANSettingsFormFields.IP]: string;
  [ELANSettingsFormFields.MASK]: string;
  [ELANSettingsFormFields.GATEWAY]: string;
  [ELANSettingsFormFields.MAIN_DNS]: string;
  [ELANSettingsFormFields.ALTER_DNS]?: string;
}

export const LANSettingsSchema = yup.object().shape({
  [ELANSettingsFormFields.MODE]: createNetworkModeField(),
  [ELANSettingsFormFields.IP]: createRequiredString(),
  [ELANSettingsFormFields.MASK]: createRequiredString(),
  [ELANSettingsFormFields.GATEWAY]: createRequiredString(),
  [ELANSettingsFormFields.MAIN_DNS]: createRequiredString(),
  [ELANSettingsFormFields.ALTER_DNS]: createStringField(),
});
