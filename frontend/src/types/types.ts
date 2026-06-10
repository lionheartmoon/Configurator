import { ComponentType } from "react";

export interface IResponse<T> {
  data?: T;
  error?: string;
}

export interface IResponseData<T> {
  data?: T[];
  error?: string;
}

export interface ISuccessResponse {
  status: string;
  message: string;
}

export interface IBaseIconProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export interface IOption {
  label: string;
  value: number | string;
}

export interface IOptions {
  label: string | number;
  value: string | number;
  disabled?: boolean;
  icon?: ComponentType<any>;
}

export enum EOrder {
  ASC = "asc",
  DESC = "desc",
}

export interface ISortConfig {
  key: string;
  direction: EOrder;
}

export enum EStatsColor {
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WAITING = "WAITING",
}

export enum EServiceStatus {
  ALL = "ALL",
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
  CRITICAL = "CRITICAL",
}

export enum ENetworkMode {
  DHCP = "DHCP",
  STATIC = "STATIC",
}

export interface IDeviceListOption {
  text: string;
  icon: ComponentType<any>;
}

export type TDeviceType = "modbus_tcp" | "focas" | null;

export enum EEventStatus {
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

export enum EEventLimit {
  ALL = "ALL",
  THIRTY = "THIRTY",
  FIFTY = "FIFTY",
  HUNDRED = "HUNDRED",
}

export enum EFunctionCode {
  HOLDING_REGISTERS = "HOLDING_REGISTERS",
  INPUT_REGISTERS = "INPUT_REGISTERS",
  COILS = "COILS",
  DISCRETE_INPUTS = "DISCRETE_INPUTS",
}

export enum EDataType {
  INT16 = "INT16",
  UINT16 = "UINT16",
  INT32 = "INT32",
  UINT32 = "UINT32",
  FLOAT32 = "FLOAT32",
  INT64 = "INT64",
  UINT64 = "UINT64",
  FLOAT64 = "FLOAT64",
  BOOL = "BOOL",
}

export enum EByteOrder {
  AB = "AB",
  BA = "BA",
  ABCD = "ABCD",
  DCBA = "DCBA",
  BADC = "BADC",
  CDAB = "CDAB",
}

export enum EServiceServerStatus {
  ACTIVE = "ACTIVE",
  RESTART = "RESTART",
  STOP = "STOP",
}
