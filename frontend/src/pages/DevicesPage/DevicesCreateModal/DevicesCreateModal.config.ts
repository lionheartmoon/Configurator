import {
  Factory,
  MonitorCog,
  Router,
  SatelliteDish,
  ServerCrash,
  Turntable,
} from "lucide-react";
import { IDeviceListOption } from "types/types";

export const modbusInfoList: IDeviceListOption[] = [
  { icon: Router, text: "Используется для ПЛК, датчиков, контроллеров" },
  { icon: SatelliteDish, text: "Стандартный порт: 502" },
  { icon: Turntable, text: "Поддерживает регистры, катушки, дискретные входы" },
  { icon: Factory, text: "Широко распространен в промышленной автоматизации" },
];

export const focasInfoList: IDeviceListOption[] = [
  { icon: Router, text: "Используется для станков ЧПУ (Fanuc, Mitsubishi)" },
  { icon: SatelliteDish, text: "Стандартный порт: 8193" },
  { icon: ServerCrash, text: "Поддерживает макросы, оси, подачи, аварии" },
  { icon: MonitorCog, text: "Специализированный протокол для станков" },
];
