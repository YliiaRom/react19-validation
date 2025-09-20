import { singUpYupSchema } from "@/entities/singup/model/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
const defaultValues = {
  displayName: "",
  email: "",
  password: "",
};
export const useYupSingUpRegister = () => {
  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(singUpYupSchema),
  });

  const field = useMemo(
    () => ({
      Controller,
      errors: form.formState?.errors,
    }),
    [form.formState?.errors]
  );
  return { ...form, field };
};
