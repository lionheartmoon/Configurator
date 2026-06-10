import { DashboardContext } from "contexts/dashboardContext";
import { useSettingsContext } from "contexts/settingsContext";
import { observer } from "mobx-react-lite";
import { FC, PropsWithChildren } from "react";
import { DashboardStore } from "stores/dashboardStore";

export const DashboardProvider: FC<PropsWithChildren> = observer(({ children }) => {
  const settingsContext = useSettingsContext();
  const store = new DashboardStore(settingsContext);

  return <DashboardContext.Provider value={store}>{children}</DashboardContext.Provider>;
});
