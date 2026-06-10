import { BASE_APP_URL } from "constants/constants";

export enum ERoutePath {
  GATEWAY_IP = "GATEWAY_IP",
  SIGN_IN = "SIGN_IN",
  DASHBOARD = "DASHBOARD",
  NETWORK_SETTING = "NETWORK_SETTING",
  DEVICES = "DEVICES",
  DEVICE = "DEVICE",
  SERVICES = "SERVICES",
}

type TRoutePaths = {
  [key in ERoutePath]: string;
};

export const routesPath: TRoutePaths = {
  [ERoutePath.GATEWAY_IP]: `/gateway_ip`,
  [ERoutePath.SIGN_IN]: `/signin`,
  [ERoutePath.DASHBOARD]: `/dashboard`,
  [ERoutePath.NETWORK_SETTING]: `/network-settings`,
  [ERoutePath.DEVICES]: `/devices`,
  [ERoutePath.DEVICE]: `/devices/:id`,
  [ERoutePath.SERVICES]: `/services`,
};

export const fullRoutesPath: TRoutePaths = {
  [ERoutePath.GATEWAY_IP]: `${BASE_APP_URL}/gateway_ip`,
  [ERoutePath.SIGN_IN]: `${BASE_APP_URL}/signin`,
  [ERoutePath.DASHBOARD]: `${BASE_APP_URL}/dashboard`,
  [ERoutePath.NETWORK_SETTING]: `${BASE_APP_URL}/network-settings`,
  [ERoutePath.DEVICES]: `${BASE_APP_URL}/devices`,
  [ERoutePath.DEVICE]: `${BASE_APP_URL}/devices/:id`,
  [ERoutePath.SERVICES]: `${BASE_APP_URL}/services`,
};
