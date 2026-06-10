import { ENetworkMode, IOption } from "types/types";

export const networkMode: IOption[] = [
  { label: "DHCP", value: ENetworkMode.DHCP },
  { label: "Статический", value: ENetworkMode.STATIC },
];
