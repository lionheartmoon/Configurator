import {
  booleanDataTypeOptions,
  byteOrderOptions,
  mainDataTypeOptions,
  sixteenByteDataTypeOptions,
  thirtyTwoByteDataTypeOptions,
} from "pages/DevicesPage/DevicesEditModal/DevicesEditModal.config";
import { EDataType, EFunctionCode } from "types/types";

export const handleRegister = (register: EFunctionCode) => {
  switch (register) {
    case EFunctionCode.HOLDING_REGISTERS:
    case EFunctionCode.INPUT_REGISTERS:
      return mainDataTypeOptions;

    case EFunctionCode.COILS:
    case EFunctionCode.DISCRETE_INPUTS:
      return booleanDataTypeOptions;

    default:
      return [];
  }
};

export const handleType = (type: EDataType) => {
  switch (type) {
    case EDataType.INT16:
    case EDataType.UINT16:
      return sixteenByteDataTypeOptions;

    case EDataType.INT32:
    case EDataType.UINT32:
    case EDataType.FLOAT32:
      return thirtyTwoByteDataTypeOptions;

    case EDataType.INT64:
    case EDataType.UINT64:
    case EDataType.FLOAT64:
    case EDataType.BOOL:
      return byteOrderOptions;

    default:
      return [];
  }
};
