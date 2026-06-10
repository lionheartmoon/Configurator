import * as yup from "yup";
import { validationMessages } from "./validationMessages";
import { ENetworkMode, EServiceStatus } from "types/types";

const ipv4Regex =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

export const createRequiredStringField = (min: number, max: number) =>
  yup
    .string()
    .trim()
    .required(validationMessages.required)
    .min(min, validationMessages[`min${min}`])
    .max(max, validationMessages[`max${max}`]);

export const createStringField = () => yup.string().trim();

export const createStringLengthField = (min: number, max: number) =>
  yup
    .string()
    .trim()
    .min(min, validationMessages[`min${min}`])
    .max(max, validationMessages[`max${max}`])
    .nullable()
    .default(null);

export const createRequiredString = () =>
  yup.string().trim().required(validationMessages.required);

export const createBooleanField = () => yup.boolean().default(false);

export const createDescriptionField = (max: number) =>
  yup.string().trim().max(max, validationMessages[`max${max}`]).nullable().default("");

export const createTubNumberField = () =>
  yup
    .string()
    .trim()
    .required(validationMessages.required)
    .matches(/^\d+$/, validationMessages.equalsSix)
    .length(6, validationMessages.equalsSix);

export const createPhoneNumberField = () =>
  yup
    .string()
    .trim()
    .required(validationMessages.required)
    .matches(/^89\d{9}$/, validationMessages.phone)
    .length(11, validationMessages.equals11);

export const createIPField = () =>
  yup
    .string()
    .trim()
    .required("IP адрес обязателен")
    .matches(ipv4Regex, "Введите корректный IPv4 адрес");

export const createRoleField = () => yup.string().required(validationMessages.required);

export const createNumberField = (max: number) =>
  yup
    .string()
    .trim()
    .required(validationMessages.required)
    .max(max, validationMessages[`max${max}`])
    .matches(/^\d+$/, validationMessages.onlyNumber)
    .nullable()
    .default(null);

export const createProjectField = () =>
  yup.number().required(validationMessages.required);

export const createServiceStatusField = () =>
  yup.mixed<EServiceStatus>().oneOf(Object.values(EServiceStatus)).required();

export const createNetworkModeField = () =>
  yup.mixed<ENetworkMode>().oneOf(Object.values(ENetworkMode)).required();

export const createJobPositionFiled = () =>
  yup.string().trim().required(validationMessages.required);

// yup.mixed<EJobPosition>().oneOf(Object.values(EJobPosition)).required();

export const nullableField = () => yup.string().nullable().default(null);

export const baseObject = () =>
  yup.object().shape({
    id: yup.number().required().integer(),
    name: yup.string().required(),
  });

export const createPasswordField = (isRequired: boolean) => {
  return isRequired ? createRequiredStringField(4, 15) : yup.string().default("");
};

export const integerField = () =>
  yup
    .number()
    .required(validationMessages.required)
    .default(0)
    .nonNullable("")
    .typeError("");

export const createBasicOptionsField = () =>
  yup.array().of(baseObject()).nullable().default(null);

export const createPositiveNumericField = () =>
  yup
    .number()
    .required(validationMessages.required)
    .default(1)
    .positive("Число должно быть больше нуля")
    .nonNullable("Число должно быть больше 0");

// export const createSelectField = (object: any) => yup
//           .mixed<EHoursField>()
//           .oneOf(Object.values(object))
//           .required()
