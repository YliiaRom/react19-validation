import {
  schema,
  userFormSchema,
  schemaWhen,
  schemaCheckbox,
} from "@/shared/schemas/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

function YupForm() {
  const [dataFirstForm, setDataFirstForm] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const {
    register: registerUserForm,
    handleSubmit: handleSubmitUserForm,
    formState: { errors: errorsUserForm },
    reset: resetUserForm,
  } = useForm({
    resolver: yupResolver(userFormSchema),
  });

  const {
    register: registerWhen,
    handleSubmit: handleSubmitWhen,
    formState: { errors: errorsWhen },
    reset: resetWhen,
  } = useForm({ resolver: yupResolver(schemaWhen) });
  // --checkbox
  const {
    register: registerCheckbox,
    handleSubmit: handleSubmitCheckbox,
    formState: { errors: errorsCheckbox },
    watch: watchCheckbox,
    reset: resetCheckbox,
  } = useForm({
    resolver: yupResolver(schemaCheckbox),
    defaultValues: {
      showEmail: false, // галка по умолчанию выключена
      email: "",
    },
  });
  const wisibleEmail = watchCheckbox("showEmail");
  // ----------------------------

  const onSubmitFirstForm = (data) => {
    console.log(`---------onSubmitFirtForm data:`, data);
    setDataFirstForm(data);
    reset();
  };
  const onSubmitUserForm = (data) => {
    console.log(`---------onSubmitUserForm`, data);

    //--тут данні відправл на сервер
    resetUserForm();
  };
  // --when умовний
  const onSubmitWhenForm = (data) => {
    console.log(data);
    // --запит на серв
    resetWhen();
  };
  // --when checkbox
  const onSubmitWhenCheckbox = (data) => {
    console.log(`---------onSubmitWhenCheckbox`, data);
    resetCheckbox();
  };
  return (
    <>
      <h2>Робити окремі схеми для кожної форми</h2>
      <p className="accent">
        1)import &#123;yupResolver&#125; from "@hookform/resolvers/yup"
      </p>
      <p className="accent">
        {" "}
        2)const &#123; register, handleSubmit, formState: &#123; errors &#125;,
        &#125; = useForm(&#123; <mark>resolver: yupResolver(schema)</mark>{" "}
        &#125;);
      </p>
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmitFirstForm)}>
          <label>
            Email:&#123;...register("email")&#125;
            <input id="emailYup" {...register("email")} />
            &#123;errors.email.message&#125;
            {errors?.email?.message && <p>{errors.email.message}</p>}
          </label>

          <label>
            {" "}
            Password: &#123;...register("password")&#125;
            <input id="passwordYup" {...register("password")} />
            &#123;errors.password.message&#125;
          </label>
          {errors?.password?.message && <p>{errors.password.message}</p>}
          <button type="submit">submit</button>
        </form>
        <p className="accent">
          <mark> import * as yup from "yup";</mark>
          <br />
          const schema = <mark>yup.</mark>object(&#123;
          <br />
          <mark> email: </mark>yup
          <br />
          .string()
          <br />
          .email("Не вірний формат email ")
          <br />
          .required("email заповнювати обоі'язково"),
          <br />
          <mark> password:</mark> yup
          <br />
          .string()
          <br />
          .min(6, "моє повідомлення: min-6")
          <br />
          .max(8, "моє повідомлення: max-8")
          <br />
          .required("Обов'язково заповнити"),
          <br />
          &#125;);
          <br />
        </p>
      </div>
      {/* -----------user Form */}
      <div style={{ borderBlockStart: "2px dotted #999" }}>
        <h2>
          Перетворення типів в schema : <br />
          щоб не писати <mark>valueAsNumber </mark>/ <mark>valueAsData</mark>{" "}
          пишемо: age:
          <mark> yup.number()</mark>
          ... <br />
          defaultField: <mark>yup.date()</mark>.default(() =&gt; new Date())
        </h2>

        <form
          className="form"
          onSubmit={handleSubmitUserForm(onSubmitUserForm, (errors) =>
            console.log("Validation errors:", errors)
          )}
        >
          <p>
            onSubmit= &#123;handleSubmitUserForm(onSubmitUserForm, (errors)
            =&gt; console.log("Validation errors:", errors) )&#125;
          </p>
          {/* --username */}
          <label>
            username: yup.string()
            <p className="accent">
              <mark> .matches(/^[a-zA-Z0-9]+$/,</mark> "Тільки латинські літери
              та цифри") <br />
              <mark>.test("no-admin"</mark>, "Ім'я admin заборонене", (value)
              =&gt; value !== "admin") <br />
              min(1 , "xxx моє повідомлення")
            </p>
            <input id="userNameYup" {...registerUserForm("username")} />
            <p> &#123;errors.username.message&#125;:</p>
            {errorsUserForm?.username?.message && (
              <p className="error">{errorsUserForm.username.message}</p>
            )}
          </label>
          {/* --age */}
          <label>
            age: yup.number()
            <br />
            <p className="accent">
              .min(18, "Має бути &gt;=18") <br />
              .max(60, "має бути &lt;= 60"),
            </p>
            <input id="ageYup" {...registerUserForm("age")} />
            <p>&#123;errors.age.message&#125;</p>
            {errorsUserForm?.age?.message && (
              <p className="error">{errorsUserForm.age.message}</p>
            )}
          </label>

          <label>
            date:
            <br />
            <p className="accent">
              <mark>yup.date()</mark> <br /> <mark>.transform(</mark>(value,
              originalValue) =&gt; <br /> originalValue ?{" "}
              <mark>new Date(originalValue)</mark> : null )<br />
              <mark> .min(new Date()</mark>, "Дата не може бути в минулому")
            </p>
            <input type="date" id="" {...registerUserForm("defaultField")} />
            {errorsUserForm?.defaultField?.message && (
              <p className="error">{errorsUserForm.defaultField.message}</p>
            )}
          </label>

          <button type="submit">submit</button>
        </form>
      </div>
      {/* -----------when */}
      <div style={{ borderBlockStart: "2px dotted #999" }}>
        <h2> Умовна логіка: when (1.32.00)</h2>
        <form
          className="form"
          onSubmit={handleSubmitWhen(onSubmitWhenForm, (errorsWhen) =>
            console.log(`--errors whenForm:`, errorsWhen)
          )}
        >
          <label>
            username: yup.string()
            <input {...registerWhen("username")} placeholder="admin / yuliia" />
          </label>
          <label>
            conditionalField: (обов'язково тільки для admin): <br />
            <p className="accent">
              {" "}
              conditionalField: yup
              <br />
              .string()
              <br />
              .nullable()
              <br />
              <mark> .when("username"</mark>, &#123;
              <br />
              is: "admin",
              <br />
              <mark> then: (schema) =&gt;</mark> schema.required("обов'язково"),
              <br />
              <mark> otherwise: (schema) =&gt;</mark> schema.
              <mark>notRequired()</mark>,
              <br />
              &#125;),
            </p>
            <input
              {...registerWhen("conditionalField")}
              placeholder="залежить від username"
            />
            {errorsWhen?.conditionalField?.message && (
              <p className="error">{errorsWhen.conditionalField.message}</p>
            )}
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
      {/* ----checkbox */}
      <div>
        <form
          className="form"
          onSubmit={handleSubmitCheckbox(
            onSubmitWhenCheckbox,
            (errorsCheckbox) =>
              console.log(`-------errorsCheckbox`, errorsCheckbox)
          )}
        >
          <h2>
            const showEmailValue = watch("showEmail"); <br />
            &#123;showEmailValue && ( &lt;label&gt; Email: &lt;input
          </h2>
          <label>
            Показати поле email: <br />{" "}
            <p className="accent">showEmail: yup.boolean()</p>
            <input type="checkbox" {...registerCheckbox("showEmail")} />
          </label>
          {wisibleEmail && (
            <label>
              email: yup .string()
              <p className="accent">
                <mark> .transform((val)</mark> =&gt; (val === "" ? null : val))
                // пустую строку делаем null <br />
                <mark>.when("showEmail"</mark>, &#123; <br />
                is: true, // если галка включена
                <br />
                <mark> then: (schema) =&gt;</mark> <br />
                schema.required("Email обов'язково").email("Невірний формат"),{" "}
                <br />
                <mark> otherwise: (schema) =&gt;</mark> schema.nullable(), //
                если галка выключена — пусто допустимо &#125;),
              </p>
              <input type="email" {...registerCheckbox("email")} />
              {errorsCheckbox?.email?.message && (
                <p className="error">{errorsCheckbox.email.message}</p>
              )}
            </label>
          )}

          <button type="submit">submit</button>
        </form>
      </div>
      <a href="https://www.youtube.com/live/INcPJk1uaRY" target="_blank">
        <button className="btnLink">youtube 1.21.01</button>
      </a>
    </>
  );
}

export default YupForm;
