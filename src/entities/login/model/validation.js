import * as yup from "yup";

export const loginRegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email("не корректний email")
    .required("Email обовʼязковий"),
  password: yup
    .string()
    .min(6, "Мінімум 6 символів")
    .max(8, "Mаксимум 8 символів")
    .matches(/[A-Z]/, "Має містити велику літеру")
    .matches(/[a-z]/, "Має містити малу літеру")
    .matches(/[0-9]/, "Має містити цифру")
    .matches(/[^A-Za-z0-9]/, "Має містити спецсимвол")
    .required("Пароль обовʼязковий"),
});
