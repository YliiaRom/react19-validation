import { loginRegisterSchema } from "@/entities/login/model/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
};
export const useLoginRegisterWithYup = () => {
  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(loginRegisterSchema),
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
