import * as yup from "yup";
export const registerSchema = yup.object().shape({
  nickName: yup
    .string()
    .trim()
    .min(1, "min 1 символ")
    .max(30, "max 30 символів")
    .required("вкажіть свій нікнейм"),
  email: yup
    .string()
    .email("не корректний email")
    .required("вкажіть свій email"),
  age: yup
    .number()
    .typeError("Вік має бути числом")
    .integer("тільки ціле число")
    .min(16, "мін вік 16")
    .max(90, "max вік 90")
    .required("вкажіть свій вік"),
});
