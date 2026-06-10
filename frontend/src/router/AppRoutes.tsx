import { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routesPath } from "./routes";
import { DashboardPage } from "pages/DashboardPage/DashboardPage";
import GatewayIPPage from "pages/GatewayIPPage/GatewayIPPage";
import NetworkSettingsPage from "pages/NetworkSettingsPage/NetworkSettingsPage";
import DevicesPage from "pages/DevicesPage/DevicesPage";
import ServicesPage from "pages/ServicesPage/ServicesPage";
import SignInPage from "pages/SignInPage/SignInPage";
import { AuthRouter } from "./AuthRouter";
import DevicePage from "pages/DevicePage/DevicePage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

export interface IRoute {
  path: string;
  element: ReactNode;
  isPrivate?: boolean;
}

export const routes: IRoute[] = [
  // { path: routesPath.GATEWAY_IP, element: <GatewayIPPage /> },
  { path: routesPath.SIGN_IN, element: <SignInPage /> },
  { path: routesPath.DASHBOARD, element: <DashboardPage /> },
  { path: routesPath.NETWORK_SETTING, element: <NetworkSettingsPage /> },
  { path: routesPath.DEVICES, element: <DevicesPage /> },
  { path: routesPath.DEVICE, element: <DevicePage /> },
  { path: routesPath.SERVICES, element: <ServicesPage /> },
];

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routesPath.SIGN_IN} replace />} />
      {/* <Route path={routesPath.GATEWAY_IP} element={<GatewayIPPage />} /> */}
      <Route path={routesPath.SIGN_IN} element={<SignInPage />} />
      {/* <Route path="/500" element={<Error500Page />} /> */}
      <Route path="*" element={<NotFoundPage />} />
      {routes.map(({ path, element, isPrivate }) => (
        <Route
          key={path}
          path={path}
          // element={<AuthRouter isPrivate={isPrivate}>{element}</AuthRouter>}
          element={element}
        />
      ))}
    </Routes>
  );
};
