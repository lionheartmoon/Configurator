import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { ENetworkMode, IResponse } from "types/types";
import { SettingsStore } from "./settingsStore";
import { env } from "env";

export interface ILanSettings {
  mode: ENetworkMode;
  ip: string | null;
  mask: string | null;
  gateway: string | null;
  mainDNS: string | null;
  alterDNS: string | null;
}

export interface IWiFiSettings extends ILanSettings {
  name: string | null;
  password?: string | null;
  available_networks: string[];
}

export interface IGetNetworkSettings {
  lan: ILanSettings;
  wifi: IWiFiSettings;
}

export interface INetworkSettingsStore {
  isFetch: boolean;

  lan: ILanSettings | null;
  wifi: IWiFiSettings | null;

  getNetworkSettings: () => Promise<IResponse<IGetNetworkSettings>>;
}

export class NetworkSettingsStore implements INetworkSettingsStore {
  ip: string | null = null;

  constructor(settingStore: SettingsStore) {
    makeAutoObservable(this);
    this.ip = settingStore.ip;
  }

  isFetch: boolean = false;

  public lan: ILanSettings | null = null;
  public wifi: IWiFiSettings | null = null;

  getNetworkSettings = async () => {
    this.isFetch = true;

    return await axios
      .get(`${env.REACT_APP_API_URL}/tcp-ip`)
      .then(({ status, data }) => {
        if (status === 200) {
          runInAction(() => {
            this.lan = data.lan;
            this.wifi = data["wi-fi"];
          });
        }

        return data;
      })
      .catch(({ response }) => {
        return { error: response.data.message };
      })
      .finally(() => (this.isFetch = false));
  };
}
