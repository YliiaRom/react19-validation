import { registerSchema } from "@/entities/user/model/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
let defaultValues = {
  name: "",
  age: "",
  married: "no",
};
export const useRegisterForm = () => {
  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(registerSchema),
  });
  const field = useMemo(
    () => ({
      Controller,
      errors: form.formState.errors,
    }),
    [form.formState.errors]
  );
  return { ...form, field };
};
