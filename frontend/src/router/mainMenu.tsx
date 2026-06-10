import { EMainMenuTitle } from "helpers/mainTitles";
import { LayoutDashboard, Router, Server, Settings } from "lucide-react";
import { ComponentType, ReactNode } from "react";
import { routesPath } from "./routes";

export interface IMainMenu {
  title: string;
  path?: string;
  icon: ComponentType<any>;
  svg?: ReactNode;
  isPrivate?: boolean;
  divider?: boolean;
  link?: boolean;
}

export const mainMenu: IMainMenu[] = [
  {
    title: EMainMenuTitle.INFORMATION,
    icon: LayoutDashboard,
    path: routesPath.DASHBOARD,
  },
  {
    title: EMainMenuTitle.TCP_IP_SETTINGS,
    icon: Router,
    path: routesPath.NETWORK_SETTING,
  },
  {
    title: EMainMenuTitle.DEVICES,
    icon: Server,
    path: routesPath.DEVICES,
  },
  // {
  //   title: EMainMenuTitle.SERVICES_SETTINGS,
  //   icon: Settings,
  // },
];
