import { AUTH_KEY, IP_KEY } from "constants/constants";
import { makeAutoObservable } from "mobx";

export interface ISettingsStore {
  ip: string | null;
  isAuth: boolean;
  isAdmin: boolean;

  setIP: (value: string | null) => void;
  setIsAuth: (value: boolean) => void;
  syncAuthState: () => void;
}

export class SettingsStore implements ISettingsStore {
  constructor() {
    makeAutoObservable(this);
  }

  public ip: string | null = localStorage.getItem(IP_KEY) || null;
  public isAuth: boolean = !!localStorage.getItem(AUTH_KEY) || false;
  public isAdmin: boolean = false;

  syncAuthState = () => {
    if (!!localStorage.getItem(AUTH_KEY)) return;

    this.isAuth = !!localStorage.getItem(AUTH_KEY);
    this.ip = localStorage.getItem(IP_KEY);
  };

  setIP = (value: string | null) => {
    if (value) localStorage.setItem(IP_KEY, value);
    else localStorage.removeItem(IP_KEY);

    this.ip = value;
  };

  setIsAuth = (value: boolean) => {
    if (value) localStorage.setItem(AUTH_KEY, "true");
    else localStorage.removeItem(AUTH_KEY);

    this.isAuth = value;
  };
}
