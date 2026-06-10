import { TableCellProps } from "@mui/material";

export interface IDataTable {
  [key: string]: any;
}

export interface ColumnsConfig {
  title: string;
  key: string;
  width?: string | number;
  align?: TableCellProps["align"];
  sort?: boolean;
  hidden?: boolean;
  defaultSort?: boolean;
}

export interface IDataTableDowntime {
  data: IDataTable[];
  total?: IDataTable[];
  tableTitle?: string;
}
