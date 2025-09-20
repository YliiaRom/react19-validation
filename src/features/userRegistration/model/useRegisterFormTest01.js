import { userRegisterSchemaTest01 } from "@/entities/user/api/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
let defaultValues = {
  userName: "",
  city: "",
  age: null,
  salary: null,
  experienceYears: null,
  education: "--оберіть--",
  languages: [],
  hasCar: false,
  smoke: false,
};

const useRegisterFormTest01 = () => {
  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(userRegisterSchemaTest01),
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
export default useRegisterFormTest01;
