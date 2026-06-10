import { EServiceServerStatus } from "types/types";

export const servicesTableMock = [
  {
    service: "web_server.service",
    description: "Веб-сервер управления",
    status: EServiceServerStatus.ACTIVE,
  },
  {
    service: "modbus_caller.service",
    description: "Modbus клиент",
    status: EServiceServerStatus.ACTIVE,
  },
  {
    service: "transfer.service",
    description: "Передача данных в ClickHoust",
    status: EServiceServerStatus.ACTIVE,
  },
  {
    service: "redis_insert.service",
    description: "Сервис записи в Redis",
    status: EServiceServerStatus.STOP,
  },
  {
    service: "service_manager.service",
    description: "Менеджер сервисов",
    status: EServiceServerStatus.STOP,
  },
];
