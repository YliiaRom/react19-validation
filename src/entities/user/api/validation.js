import * as yup from "yup";

let MIN_AGE = 16;
let MIN_SALARY = 5000;

let languagesList = [
  "uk",
  "en",
  "es",
  "it",
  "cz",
  "sk",
  "hu",
  "de",
  "pl",
  "fr",
];

export const userRegisterSchemaTest01 = yup.object().shape({
  userName: yup
    .string()
    .trim()
    .required("Обов'язково нікнейм")
    .min(1, "min 1 символ")
    .max(20, "max 20 симво"),
  city: yup
    .string()
    .trim()
    .min(1, "min 1 символ")
    .max(50, "max 50 символів")
    .required("Обов'язково вказати місто"),
  age: yup
    .number()
    .integer("Лише ціле число")
    .min(MIN_AGE, "min 16")
    .max(100, "min 100")
    .required("Обов'язково вік"),
  salary: yup
    .number()
    .typeError("ЗП має бути числом")
    .min(5000, `min ${MIN_SALARY}`)
    .max(50000, "min 5000")
    .required("Обов'язково зп"),
  experienceYears: yup
    .number()
    .typeError("має бути числом")
    .min(0, "Не може бути відʼємним")
    .max(60, "Нереалістичний стаж")
    .required("Обов'язково стаж"),
  education: yup
    .string()
    .oneOf(
      ["school", "college", "bachelor", "master", "phd"],
      "Оберіть варіант"
    )
    .required("моє повідомлення: Освіта обовʼязкова"),
  languages: yup
    .array()
    .of(yup.string().oneOf(languagesList, "Некоректна мова"))

    .min(1, "Оберіть щонайменше одну мову")
    .required("Оберіть мови"),

  hasCar: yup.boolean().default(false),
  smoke: yup.boolean().default(false),
  married: yup
    .string()
    .oneOf(["yes", "no"], "Оберіть так/ні")
    .required("Оберіть статус"),
});
