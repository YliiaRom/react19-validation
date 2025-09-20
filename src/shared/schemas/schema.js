import * as yup from "yup";
export const schema = yup.object({
  email: yup
    .string()
    .email("Не вірний формат email ")
    .required("email заповнювати обоі'язково"),
  password: yup
    .string()
    .min(6, "моє повідомлення: min-6")
    .max(8, "моє повідомлення: max-8")
    .required("Обов'язково заповнити"),
});
export const userFormSchema = yup.object({
  age: yup
    .number()
    .required("вік обов'язковий")
    .min(18, "Має бути >=18")
    .max(60, "має бути <= 60"),
  defaultField: yup
    .date()
    .transform((value, originalValue) =>
      originalValue ? new Date(originalValue) : null
    )
    .min(new Date(), "Дата не може бути в минулому")
    .required("дата обов'язково"),

  username: yup
    .string()
    .required("Ім'я обов'язково")
    .min(1, "Мін 1 символ")
    .max(20, "Max 20 символів")
    .matches(/^[a-zA-Z0-9]+$/, "Тільки латинські літери та цифри")
    .test("no-admin", "Ім'я admin заборонене", (value) => value !== "admin"),
});

export const schemaWhen = yup.object({
  username: yup.string(),
  conditionalField: yup
    .string()
    .nullable()
    .when("username", {
      is: "admin",
      then: (schema) => schema.required("обов'язково"),
      otherwise: (schema) => schema.notRequired(),
    }),
});
export const schemaCheckbox = yup.object({
  showEmail: yup.boolean(),
  email: yup
    .string()
    .transform((val) => (val === "" ? null : val)) // пустую строку делаем null
    .when("showEmail", {
      is: true, // если галка включена
      then: (schema) =>
        schema.required("Email обов'язково").email("Невірний формат"),
      otherwise: (schema) => schema.nullable(), // если галка выключена — пусто допустимо
    }),
});
