import { createContext, useContext } from "react";
import { IDeviceStore } from "stores/devicesStore";

export const DeviceContext = createContext<IDeviceStore | null>(null);

export const useDeviceContext = () => {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error("useDeviceContext must be used within DeviceProvider");
  }

  return context;
};
