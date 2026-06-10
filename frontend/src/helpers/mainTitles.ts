export enum EMainMenuTitle {
  INFORMATION = "INFORMATION",
  TCP_IP_SETTINGS = "TCP_IP_SETTINGS",
  DEVICES = "DEVICES",
  SERVICES_SETTINGS = "SERVICES_SETTINGS",
}

export const translatedMenuTitle: Record<EMainMenuTitle, string> = {
  DEVICES: "Устройства",
  INFORMATION: "Информация",
  SERVICES_SETTINGS: "Управление сервисами",
  TCP_IP_SETTINGS: "TCP/IP Настройки",
};
