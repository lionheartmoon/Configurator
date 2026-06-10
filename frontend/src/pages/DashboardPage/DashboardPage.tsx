import { MainLayout } from "components/MainLayout/MainLayout";
import PageTitle from "components/PageTitle/PageTitle";
import { usePageTitle } from "hooks/usePageTitle";
import { DashboardStats } from "./DashboardStats/DashboardStats";
import { DashboardForms } from "./DashboardForms/DashboardForms";
import { DashboardTable } from "./DashboardTable/DashboardTable";
import { useDashboardContext } from "contexts/dashboardContext";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { EEventLimit, EServiceStatus } from "types/types";
import { handleLimit } from "helpers/limit";

export const DashboardPage = observer(() => {
  usePageTitle("Панель информации");

  const { dashboard, getDashboard, getServices } = useDashboardContext();

  const [service, setService] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<EServiceStatus | undefined>(undefined);
  const [limit, setLimit] = useState<EEventLimit | undefined>(EEventLimit.FIFTY);

  useEffect(() => {
    getDashboard(service, status, handleLimit(limit));

    const interval = setInterval(() => {
      getDashboard(service, status, handleLimit(limit));
    }, 60000);

    return () => clearInterval(interval);
  }, [service, status, limit]);

  useEffect(() => {
    getServices();
  }, []);

  return (
    <MainLayout>
      <PageTitle
        title={`Модуль сбора данных "${dashboard?.name.toUpperCase() ?? "-"}"`}
        subtitle="Краткая информация о модуле"
      />

      <DashboardStats />
      <DashboardForms />
      <DashboardTable setService={setService} setStatus={setStatus} setLimit={setLimit} />
    </MainLayout>
  );
});
