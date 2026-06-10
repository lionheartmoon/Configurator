import { FC, PropsWithChildren } from "react";
import ThemeProvider from "providers/ThemeProvider";
import { SnackbarProvider } from "notistack";
import { SettingsProvider } from "providers/SettingsProvider";
import { DashboardProvider } from "providers/DashboardProvider";
import { NetworkSettingsProvider } from "providers/NetworkSettingsProvider";
import { DeviceProvider } from "providers/DeviceProvider";

export const CProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <SettingsProvider>
          <DashboardProvider>
            <NetworkSettingsProvider>
              <DeviceProvider>{children}</DeviceProvider>
            </NetworkSettingsProvider>
          </DashboardProvider>
        </SettingsProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
