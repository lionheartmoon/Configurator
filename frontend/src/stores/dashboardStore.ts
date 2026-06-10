import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import {
  EEventLimit,
  EEventStatus,
  EServiceStatus,
  IOption,
  IResponse,
  IResponseData,
  ISuccessResponse,
} from "types/types";
import { SettingsStore } from "./settingsStore";
import { env } from "env";

export interface Event {
  time: string;
  chapter: string;
  level: EEventStatus;
  message: string;
}

export interface Dashboard {
  name: string;
  devices: number;
  active: number;
  unactive: number;
  packages: number;
  time: string;
  serverIP: string;
  serverStatus: string;
  events: Event[];
}

export interface IDashboardStore {
  isFetch: boolean;
  isServerFetch: boolean;
  isTimeFetch: boolean;

  dashboard: Dashboard | null;
  services: IOption[];

  getDashboard: (
    service?: string,
    status?: EServiceStatus,
    limit?: number
  ) => Promise<IResponse<Dashboard>>;
  getServices: () => Promise<IResponseData<IOption>>;
  setServerURL: (url: string) => Promise<IResponse<ISuccessResponse>>;
  setModuleTime: (time: string) => Promise<IResponse<ISuccessResponse>>;
}

export class DashboardStore implements IDashboardStore {
  ip: string | null = null;

  constructor(settingStore: SettingsStore) {
    makeAutoObservable(this);

    this.ip = settingStore.ip;
  }

  isFetch: boolean = false;
  isServerFetch: boolean = false;
  isTimeFetch: boolean = false;

  dashboard: Dashboard | null = null;
  services: IOption[] = [];

  getDashboard = async (
    service?: string,
    status?: EServiceStatus,
    limit?: number
  ): Promise<IResponse<Dashboard>> => {
    this.isFetch = true;

    return await axios
      .get(`${env.REACT_APP_API_URL}/dashboard`, {
        params: {
          service,
          status,
          limit,
        },
      })
      .then(({ status, data }) => {
        if (status === 200) {
          runInAction(() => {
            this.dashboard = data;
          });
        }

        return data;
      })
      .catch(({ response }) => {
        return { error: response.data.message };
      })
      .finally(() => (this.isFetch = false));
  };

  getServices = async (): Promise<IResponseData<IOption>> => {
    return await axios
      .get(`${env.REACT_APP_API_URL}/dashboard/services`)
      .then(({ status, data }) => {
        if (status === 200) {
          runInAction(() => {
            this.services = data || [];
          });
        }
        return data;
      })
      .catch(({ response }) => {
        return { error: response.data.message };
      });
  };

  setServerURL = async (url: string): Promise<IResponse<ISuccessResponse>> => {
    this.isServerFetch = true;

    return await axios
      .post(`${env.REACT_APP_API_URL}/dashboard/server`, { url })
      .then(({ data }) => {
        return data;
      })
      .catch(({ response }) => {
        return { error: response.data.message };
      })
      .finally(() => (this.isServerFetch = false));
  };

  setModuleTime = async (time: string): Promise<IResponse<ISuccessResponse>> => {
    this.isTimeFetch = true;

    return await axios
      .post(`${env.REACT_APP_API_URL}/dashboard/time`, { time })
      .then(({ data }) => {
        return data;
      })
      .catch(({ response }) => ({ error: response.data.message }))
      .finally(() => (this.isTimeFetch = false));
  };
}
