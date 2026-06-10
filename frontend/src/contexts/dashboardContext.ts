import { createContext, useContext } from "react";
import { IDashboardStore } from "stores/dashboardStore";
import { ISettingsStore } from "stores/settingsStore";

export const DashboardContext = createContext<IDashboardStore | null>(null);

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("useDashboardContext must be used within DashboardProvider");
  }

  return context;
};
