import { useState } from "react";
import { useLogin } from "../model/useLogin";
import { useNavigate } from "react-router";
import { frontRoutes } from "@/shared/api/config/routes/frontRoutes";
import { useLoginRegisterWithYup } from "../model/useLoginRegisterWithYup";
import InputLoginForm from "@/shared/ui/InputLoginForm";
function LoginFormTest01() {
  const {
    register,
    handleSubmit,
    control,
    field,
    watch,
    reset,
    formState: { isSubmitting, isValid },
  } = useLoginRegisterWithYup();

  const { Controller, errors } = field;

  const { login, googleLogin, isLoading, error } = useLogin();

  const navigate = useNavigate();

  const handleGoogle = async () => {
    try {
      await googleLogin();
      navigate(frontRoutes.pages.HomePage.navigationPath);
    } catch (error) {
      console.log(error.message);
    }
  };

  const submit = async (values) => {
    try {
      await login(values);
      navigate(frontRoutes.pages.HomePage.navigationPath);
    } catch (error) {
      console.log(error.message);
    }
    reset();
  };

  const watchEmail = watch("email");
  const watchPassword = watch("password");
  return (
    <>
      <h2> Форма з валідацією YUP</h2>
      <p>email: 'mmm444@gmail.com', password: 'MMM44_m'</p>
      <form onSubmit={handleSubmit(submit)} className="loginForm yupLoginForm">
        <p className="accent">email: 'mmm444@gmail.com'</p>
        <p className="accent">password: 'MMM44_m'</p>
        <InputLoginForm
          label="Email"
          placeholder="xxxx@gmail.com"
          hint="yup.email('не корректний email')"
          error={errors.email?.message}
          {...register("email")}
        />

        <InputLoginForm
          label="Password"
          type="password"
          placeholder="XX44_a"
          hint="yup.min(6, '...').max(8, '...')matches(/[^A-Za-z)-9]/, 'містити спец символи/ букви та цифри')"
          error={errors.password?.message}
          {...register("password")}
        />
        <button type="submit">Submit</button>
        <button onClick={handleGoogle}>Google</button>
      </form>
      <div className="formValueBox">
        <p>Введенні данні:</p>
        <p> email: {watchEmail && watchEmail}</p>
        <p> password: {watchPassword && watchPassword}</p>
      </div>
    </>
  );
}

export default LoginFormTest01;
