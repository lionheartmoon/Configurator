import { DeviceContext } from "contexts/devicesContext";
import { useSettingsContext } from "contexts/settingsContext";
import { observer } from "mobx-react-lite";
import { FC, PropsWithChildren } from "react";
import { DeviceStore } from "stores/devicesStore";

export const DeviceProvider: FC<PropsWithChildren> = observer(({ children }) => {
  const settingsContext = useSettingsContext();
  const store = new DeviceStore(settingsContext);

  return <DeviceContext.Provider value={store}>{children}</DeviceContext.Provider>;
});
