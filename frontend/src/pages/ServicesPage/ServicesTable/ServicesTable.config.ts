import { ColumnsConfig } from "components/DataTableServiceUI/DataTableServiceUI.types";

export const columnsConfig: ColumnsConfig[] = [
  { key: "service", title: "Сервис", align: "left" },
  { key: "description", title: "Описание", align: "left" },
  { key: "status", title: "Статус", align: "center" },
  { key: "actions", title: "Действия", align: "center" },
];
