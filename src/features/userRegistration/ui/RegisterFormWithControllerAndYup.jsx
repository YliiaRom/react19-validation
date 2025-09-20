// import { userApi, useRegisterUserMutation } from "@/entities/user/api/userApi";
import CheckboxTest01 from "@/shared/ui/CheckboxTest01";
import useRegisterFormTest01 from "../model/useRegisterFormTest01";
import InputTest01 from "@/shared/ui/InputTest01";
import Select from "@/shared/ui/Select";
import { useId, useMemo } from "react";
import RadioGroupTest01 from "@/shared/ui/RadioGroupTest01";

// console.log(userApi);
// console.log(useRegisterUserMutation);

let EDUCATION_DATA = [
  { value: "school", label: "школа" },
  { value: "college", label: "коллєдж" },
  { value: "bachelor", label: "бакалавр" },
  { value: "master", label: "майтер" },
  { value: "ХХХ", label: "ХХХ" },
];
const LANG_OPTIONS = [
  { value: "uk", label: "Українська" },
  { value: "en", label: "English" },
  { value: "de", label: "Deutsch" },
  { value: "pl", label: "Polski" },
  { value: "fr", label: "Français" },
  { value: "es", label: "Español" },
  { value: "it", label: "Italiano" },
  { value: "cz", label: "Čeština" },
  { value: "sk", label: "Slovenčina" },
  { value: "hu", label: "Magyar" },
];
function RegisterFormWithControllerAndYup() {
  const formTest01 = useId();

  const {
    register,
    handleSubmit,

    control,
    field: { Controller, errors },
    setValue,
    formState: { isSubmitting, isValid },
    watch,
    reset,
  } = useRegisterFormTest01();

  // const [registerUser, { isLoading, isSuccess, isError, error }] =
  //   UserApiModule.useRegisterUserMutation();

  // const [registerUser, { isLoading, isSuccess, isError, error }] =
  //   useRegisterUserMutation();

  // console.log(registerUser);

  const handlerSubmitForm = async (values) => {
    try {
      console.log(values);
      reset();
      // await registerUser(values).unwrap()
    } catch (error) {
      console.log(error);
    }
  };

  let watchNickName = watch("userName");
  let watchNickCity = watch("city");
  let watchAge = watch("age");
  let watchSalary = watch("salary");
  let watchSelectEducation = watch("education");
  let watchHasCar = watch("hasCar");
  let watchSmoke = watch("smoke");
  let watchMarried = watch("married");

  //--lang
  const watchLanguages = watch("languages") || [];
  const handlerLang = useMemo(
    () => ({
      onChange: (e) => {
        const selected = Array.from(e.target.selectedOptions).map(
          (item) => item.value
        );
        setValue("languages", selected, { shouldValidate: true });
      },
    }),
    [setValue]
  );

  return (
    <>
      <form
        className="form"
        id={formTest01}
        onSubmit={handleSubmit(handlerSubmitForm)}
      >
        <h2>Реєстрація користувача Test01:</h2>
        <InputTest01
          id={`${formTest01}-userName`}
          label="Nick name"
          placeholder="@_yup"
          hint="Ваше унікальне ім'я користувача"
          error={errors.userName?.message}
          {...register("userName")}
        />
        <InputTest01
          id={`${formTest01}-city`}
          label="city"
          placeholder="Запоріжжя"
          hint="Введіть Ваше місто"
          error={errors.city?.message}
          {...register("city")}
        />
        <InputTest01
          id={`${formTest01}-age`}
          label="age"
          placeholder="20"
          hint="Введіть Ваш вік"
          error={errors.age?.message}
          {...register("age")}
        />
        <InputTest01
          id={`${formTest01}-salary`}
          label="salary / ЗП"
          placeholder="5000"
          hint=".number().typeError('ЗП має бути числом')"
          error={errors.salary?.message}
          {...register("salary")}
        />
        <InputTest01
          id={`${formTest01}-experienceYears`}
          label="experience / стаж "
          placeholder="2"
          hint="yup.number() .typeError('має бути числом')"
          error={errors.experienceYears?.message}
          {...register("experienceYears")}
        />
        <Select
          id={`${formTest01}-education`}
          label="education / освіта"
          options={EDUCATION_DATA}
          hint="yup.oneOf['school', 'not', ...], 'текст помилки'"
          error={errors.education?.message}
          {...register("education")}
        />

        <Select
          id={`${formTest01}-languages`}
          label="languages / Мови"
          multiple
          hint="multiple // yup.array().of(yup.string().oneOf(languagesList, 'помилка'))"
          options={LANG_OPTIONS}
          // onChange={handlerLang}
          error={errors.languages?.message}
          {...register("languages")}
        />
        {/* --------------Checkbox */}
        <Controller
          control={control}
          name="hasCar"
          render={({ field }) => (
            <CheckboxTest01
              label="Чи є власне авто?"
              checked={!!field.value}
              onChange={field.onChange}
              hint="hasCar:yup.boolean().default(false)"
              error={errors.hasCar?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="smoke"
          render={({ field }) => (
            <CheckboxTest01
              label="Чи маєте звичку курити?"
              checked={!!field.value}
              hint="smoke:yup.boolean().default(false)"
              onChange={field.onChange}
              error={errors.smoke?.message}
            />
          )}
        />
        {/* -------radio Btn */}
        <Controller
          control={control}
          name="married"
          render={({ field }) => (
            <RadioGroupTest01
              label="Одружений(а)?"
              name="married"
              options={[
                { value: "yes", label: "так" },
                { value: "no", label: "ні" },
              ]}
              value={field.value}
              onChange={field.onChange}
              hint="..."
              error={errors.married?.message}
            />
          )}
        />

        <button type="submit">submit</button>
        <div className="formValueBox">
          <p>nickName: {watchNickCity && watchNickName}</p>
          <p>city: {watchNickCity && watchNickCity}</p>
          <p>age: {watchAge && watchAge}</p>
          <p>salary: {watchSalary && watchSalary}</p>
          <p>education: {watchSelectEducation && watchSelectEducation}</p>
          <p>languages: {watchLanguages && watchLanguages}</p>
          <p>has car: {watchHasCar ? "true" : "false"}</p>
          <p>smoke: {watchSmoke ? "true" : "false"}</p>
          <p>married: {watchMarried && watchMarried}</p>
        </div>
        <button onClick={() => window.location.reload()}>
          window.location.reload()
        </button>
      </form>
    </>
  );
}

export default RegisterFormWithControllerAndYup;
