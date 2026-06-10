export const BASE_APP_URL = window.location.href.includes(
  "https://chastely-known-jaybird.cloudpub.ru/",
)
  ? "https://chastely-known-jaybird.cloudpub.ru"
  : window.location.origin;

export const AUTH_KEY = "auth";
export const IP_KEY = "ip";
