import { createContext, useContext } from "react";
import { INetworkSettingsStore } from "stores/networkSettingsStore";

export const NetworkSettingsContext = createContext<INetworkSettingsStore | null>(null);

export const useNetworkSettingsContext = () => {
  const context = useContext(NetworkSettingsContext);

  if (!context) {
    throw new Error(
      "useNetworkSettingsContext must be used within NetworkSettingsProvider"
    );
  }

  return context;
};
