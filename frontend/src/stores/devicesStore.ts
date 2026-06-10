import { makeAutoObservable, runInAction } from "mobx";
import { IResponse, IResponseData, TDeviceType } from "types/types";
import { SettingsStore } from "./settingsStore";
import axios from "axios";
import { env } from "env";

export interface IDevice {
  name: string;
  ip: string;
  port: string;
  deviceId: string;
  protocol: TDeviceType;
  running: boolean;
  lastUpdate?: string;
}

export interface IDeviceStore {
  isFetch: boolean;
  device: IDevice | null;
  devices: IDevice[];

  getDevice: (deviceId: string) => Promise<IResponse<IDevice>>;
  getDevices: () => Promise<IResponseData<IDevice>>;
}

export class DeviceStore implements IDeviceStore {
  ip: string | null = null;

  constructor(settingsStore: SettingsStore) {
    makeAutoObservable(this);
    this.ip = settingsStore.ip;
  }

  isFetch: boolean = false;
  device: IDevice | null = null;
  devices: IDevice[] = [];

  getDevice = async (deviceId: string): Promise<IResponse<IDevice>> => {
    this.isFetch = true;

    return await axios
      .get(`${env.REACT_APP_API_URL}/devices`, { params: { deviceId } })
      .then(({ status, data }) => {
        if (status === 200) {
          runInAction(() => (this.device = data));
        }

        return data;
      })
      .catch(({ response }) => ({ error: response.data.message }))
      .finally(() => (this.isFetch = false));
  };

  getDevices = async (): Promise<IResponseData<IDevice>> => {
    this.isFetch = true;

    return await axios
      .get(`${env.REACT_APP_API_URL}/devices`)
      .then(({ status, data }) => {
        if (status === 200) {
          runInAction(() => (this.devices = data.devices));
        }

        return data.devices;
      })
      .catch(({ response }) => ({ error: response.data.message }))
      .finally(() => (this.isFetch = false));
  };
}
