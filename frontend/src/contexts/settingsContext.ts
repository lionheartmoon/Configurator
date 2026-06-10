import { createContext, useContext } from "react";
import { ISettingsStore } from "stores/settingsStore";

export const SettingsContext = createContext<ISettingsStore | null>(null);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettingsContext must be used within SettingsProvider");
  }

  return context;
};
