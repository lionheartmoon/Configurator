import { NetworkSettingsContext } from "contexts/networkSettingsContext";
import { useSettingsContext } from "contexts/settingsContext";
import { observer } from "mobx-react-lite";
import { FC, PropsWithChildren } from "react";
import { NetworkSettingsStore } from "stores/networkSettingsStore";

export const NetworkSettingsProvider: FC<PropsWithChildren> = observer(({ children }) => {
  const settingsContext = useSettingsContext();
  const store = new NetworkSettingsStore(settingsContext);

  return (
    <NetworkSettingsContext.Provider value={store}>
      {children}
    </NetworkSettingsContext.Provider>
  );
});
