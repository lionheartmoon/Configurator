import { useSettingsContext } from "contexts/settingsContext";
import { observer } from "mobx-react-lite";
import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { routesPath } from "./routes";

interface Props {
  children?: ReactNode;
  isPrivate?: boolean;
}

export const AuthRouter = observer(({ children, isPrivate }: Props) => {
  const { syncAuthState, isAuth } = useSettingsContext();

  useEffect(() => {
    window.addEventListener("storage", syncAuthState);
    return () => {
      window.removeEventListener("storage", syncAuthState);
    };
  }, [syncAuthState]);

  if (!isAuth) {
    return <Navigate to={routesPath.SIGN_IN} />;
  }

  //   if (isPrivate && !isAdmin) {
  //     return <Navigate to={routesPath.DASHBOARD} />;
  //   }

  return <>{children}</>;
});
