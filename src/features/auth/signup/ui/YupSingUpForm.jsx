import { useState } from "react";
import { useSignUp } from "../model/useSignUp";
import { useYupSingUpRegister } from "../model/useYupSingUpRegister";
import InputSingUp from "@/shared/ui/InputSingUp";

function YupSingUpForm({ onSuccess }) {
  const [errorMessage, setErrorMessage] = useState("");

  const { signUp, isLoading, error } = useSignUp();

  const {
    register,
    handleSubmit,
    control,
    field,
    watch,
    reset,
    formState: { isSubmitting, isValid },
  } = useYupSingUpRegister();
  const { Controller, errors } = field;

  const submit = async (value) => {
    try {
      await signUp(value);
      onSuccess && onSuccess();
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.data?.message || "помилка при реєстрації");
    }
  };
  const watchNickName = watch("displayName");
  const watchEmail = watch("email");
  let watchPassword = watch("password");
  return (
    <>
      <h2> Реєстрація з валідацією YUP</h2>
      <div className="formData">
        <p>email: 'mmm444@gmail.com', password: 'MMM44_m'</p>
      </div>

      <form onSubmit={handleSubmit(submit)} className="signUpForm yupLoginForm">
        <InputSingUp
          label="nick name"
          placeholder="yup_xxx"
          hint="Ваш нік"
          error={errors.displayName?.message}
          {...register("displayName")}
        />

        <InputSingUp
          type="email"
          label="Email"
          placeholder="xxx@gmail.com"
          hint="email:yup.email('тут повідомлення якщо була похибка')"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputSingUp
          type="password"
          label="Password"
          placeholder="SS44_a"
          hint="password: yup.min(6,'').max(8,'').matches(/[^A-Za-z0-9]/, 'велика буква, мала буква, цифра, спец символ')"
          error={errors.password?.message}
          {...register("password")}
        />

        <button type="submit">Зареєструватися</button>
      </form>
      <div className="formData">
        <p>ВВеденні данні:</p>
        <p>name: {watchNickName && watchNickName}</p>
        <p> Email: {watchEmail && watchEmail}</p>
        <p>Password:{watchPassword && watchPassword} </p>
      </div>
      {isLoading && <p>Завантаження...</p>}
      {errorMessage !== "" && errorMessage}
      {(error || errorMessage) && (
        <div>{errorMessage || error?.data?.message || "Помилка"}</div>
      )}
    </>
  );
}

export default YupSingUpForm;
