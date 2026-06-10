import { MainLayout } from "components/MainLayout/MainLayout";
import { ServicesTable } from "./ServicesTable/ServicesTable";
import { ServicesEvents } from "./ServicesEvents/ServicesEvents";
import { usePageTitle } from "hooks/usePageTitle";

const ServicesPage = () => {
  usePageTitle("Сервисы");

  return (
    <MainLayout>
      <ServicesTable />
      <ServicesEvents />
    </MainLayout>
  );
};

export default ServicesPage;
