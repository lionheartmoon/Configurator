import { SettingsContext } from "contexts/settingsContext";
import { FC, PropsWithChildren } from "react";
import { SettingsStore } from "stores/settingsStore";

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = new SettingsStore();

  return <SettingsContext.Provider value={store}>{children}</SettingsContext.Provider>;
};
