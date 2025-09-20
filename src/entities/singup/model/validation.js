import * as yup from "yup";

export const singUpYupSchema = yup.object().shape({
  displayName: yup
    .string()
    .trim()
    .min(1, "min 1 simbol")
    .max(20, "max 20 символів")
    .required("Заповнювати обов'язково"),
  email: yup
    .string()
    .email("Некоректний email")
    .required("Заповнювати обов'язково"),
  password: yup
    .string()
    .min(6, "min 6 simbols")
    .matches(/[A-Z]/, "Має бути велика літера")
    .matches(/[a-z]/, "Має бути мала літера")
    .matches(/[0-9]/, "Має бути цифра")
    .matches(/[^A-Za-z0-9]/, "Спец символ")
    .required("Заповнювати обов'язково"),
});
