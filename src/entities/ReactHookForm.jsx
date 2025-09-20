import { useState } from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const [data, setData] = useState(null);
  const [dataSecond, setDataSecond] = useState(null);
  const [dataValidate, setDataValidate] = useState(null);
  const [dataCard, setDataCard] = useState(null);
  const [dataEmailAsynk, setDataEmailAsynk] = useState(null);
  const [creteriaModeForm, setCreteriaModeForm] = useState(null);
  const [valueNumber, setValueNumber] = useState(null);
  const [valueAsData, setValueAsData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {
    register: registerName,
    handleSubmit: handleSubmitName,
    formState: { errors: errorsName },
    reset: resetName,
  } = useForm();
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    watch: watchPassword,
    formState: { errors: errorsPassword },
    reset: resetPassword,
  } = useForm();
  // --card
  const {
    register: registerCard,
    handleSubmit: handleSubmitCard,
    watch: watchCardData,
    formState: { errors: errorsCard },
    reset: resetCard,
  } = useForm();
  //--async
  const {
    register: registerAsynk,
    handleSubmit: handleSubmitAsynk,
    formState: { errors: errorsAsynk },
    reset: resetAsynk,
  } = useForm();
  //--criteriaModeForm
  const {
    register: registerCriteriaMode,
    handleSubmit: handleSubmitCriteriaMode,
    formState: { errors: errorsCriteriaMode },
    reset: resetCriteriaMode,
  } = useForm({ criteriaMode: "all" });
  //--valueAsNumber
  const {
    register: registerValueAsNumber,
    handleSubmit: handleSubmitValueAsNumber,
    formState: { errors: errorsValueAsNumber },
    reset: resetValueAsNumber,
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (dataForm) => {
    setData(dataForm);
    console.log(`----------ReactHookForm > onSubmit :`, dataForm);
    reset();
  };
  const submitSecondForm = (dataFormSecond) => {
    console.log(`-----------dataFormSecond`, dataFormSecond);
    setDataSecond(dataFormSecond);

    resetName();
  };

  const submitValidateForm = (data) => {
    console.log(`----------submitValidateForm`);
    setDataValidate(data);
    resetPassword();
  };

  const handlerOnSubmitCard = (data) => {
    console.log(`---------handlerOnSubmitCar`, data);
    setDataCard(data);
    resetCard();
  };

  const handleOnSubmitAsynk = (data) => {
    console.log(`-------handleOnSubmitAsynk`, data);
    setDataEmailAsynk(data);
    resetAsynk();
  };
  //--creteriaMode:"all"
  const handleCreteriaModeForm = (data) => {
    setCreteriaModeForm("");
    console.log(`-----------handleCreteriaModeFormЮ data:`, data);
    setCreteriaModeForm(data);
    resetCriteriaMode();
  };
  //--valueAsNumber
  const handleOnSubmitValueAsNumberForm = (data) => {
    console.log(data);
    console.log(errorsValueAsNumber?.valAsNumber?.types);
    console.log(errorsValueAsNumber?.valAsData?.types);
    setValueNumber(data.valAsNumber);
    setValueAsData(data.valAsData);
    resetValueAsNumber();
  };

  return (
    <>
      <h1>
        react-hook-form <br />
        &lt;input &#123; ...register("name", &#123; ........&#125;) &#125; &gt;
      </h1>

      <div>
        <p>Посилання на бібліотеку:</p>
        <a href="https://www.npmjs.com/package/react-hook-form" target="_blank">
          <button className="btnLink">react-hook-form</button>
        </a>
        <h2>
          const &#123; register, handleSubmit, formState: &#123; errors &#125;,
          reset, &#125; =<mark> useForm()</mark>;
        </h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Password 1: minLength=&#123;3&#125; /
            pattern="^(?=.*[A-Za-z](?=.*/d).&#123;6,&#125;$)"
            <input
              type="password"
              {...register("passwordFirst", {
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
                  message:
                    "^- начало строки; (?=.*[A-Za-z]) — хотя бы 1 буква; (?=.*\\d) — хотя бы 1 цифра; {6,} — минимум 6 символов; $ — конец строки",
                },
                minLength: {
                  value: 6,
                  message: "Min 6 символів",
                },
                required: true,
              })}
            />
          </label>
          <p className="accent">
            &lt;input type="password" <mark>&#123;</mark>
            <mark>...register(</mark>"passwordFirst", &#123; <br />
            pattern: &#123; <br /> value:
            /^(?=.*[A-Za-z])(?=.*\d).&#123;6,&#125;$/,
            <br />
            message: "... &#125;, <br />
            <br /> minLength: &#123; <br />
            value: 6, <br />
            message: "Min 6 символів", &#125;, <br />
            <br /> required: true, <br /> &#125; <br /> ) <br />{" "}
            <mark>&#125;</mark>
          </p>
          <label>
            Password 2(Confirm):
            <input
              type="password"
              {...register("passwordConfirm", {
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
                  message:
                    "^-нач строкі; (?=.*[A-Za-z])- Хотяби 1 сімвол Заглавної/ прописної літири; (?=.*d)- хотяб 1 цифра; .&#123;6,&#125;- від 6 цифр; кінець  ",
                },
                minLength: {
                  value: 6,
                  message: "мін 6 символів",
                },
              })}
            />
          </label>
          {errors.passwordFirst && (
            <p>
              Обов'язково ввести пароль <br /> або
              {errors.passwordFirst.message}
            </p>
          )}
          {errors.passwordConfirm && (
            <p>
              не однаковий пароль <br />
              {errors.passwordConfirm.message}
            </p>
          )}
          <button type="submit">Submit</button>
        </form>
        {data && (
          <div>
            <p>данні ВАЛІДНІ</p>
            <h2>
              {`Password 1: ${data.passwordFirst}`} <br />
              {`Password 2(Confirm): ${data.passwordConfirm}`}
            </h2>
          </div>
        )}
      </div>
      <hr />
      <div>
        <h2>
          onSubmit=&#123;<mark>handleSubmitName</mark>(submitSecondForm)&#125;
        </h2>

        <form className="form" onSubmit={handleSubmitName(submitSecondForm)}>
          <label>
            <p>
              {" "}
              &#123; <mark>...register</mark>("name", &#123; <br /> minLength:
              &#123;
            </p>
            <p>
              value: 3, <br />
              message: "...", <br />
              &#125; <br />
            </p>
            <p>
              required: "Тут те що відобразиться якщо false" ) <br />
              &#125;
            </p>
            <input
              id="name"
              {...registerName("name", {
                required:
                  "Тут я описую повідомлення: Обов'язково до заповнення",
                minLength: {
                  value: 3,
                  message: "Тут я описую повідомлення: Мін 3 знака",
                },
              })}
            />
          </label>
          <button type="submit">submit</button>
        </form>
        {dataSecond?.name && <p>{`ДАННІ ЩО ВІДІСЛАЛИ: ${dataSecond.name}`}</p>}
        {errorsName.name && (
          <div>
            {/* <p>{errors.name || ""}</p> */}
            <p>{errorsName.name?.message || ""}</p>
          </div>
        )}
      </div>
      {/* ----------------validate */}
      <div>
        <h2>
          <mark>validate: </mark>() =&gt; ...;<mark>watch(name)</mark> відстежує
          знач поля в реальному часі, <mark>deps:["xxx"]</mark>-контроль
          поведінки поля
        </h2>
        <form
          className="form"
          onSubmit={handleSubmitPassword(submitValidateForm)}
        >
          <label>
            Password "password3": minLength: &#123; value: 3, ....
            <input
              id="password3"
              {...registerPassword("password3", {
                minLength: {
                  value: 3,
                  message: "Тут я пишу повідомлення: min 3 символа",
                },
                required: "Тут я пишу повідомлення: обов'язково заповнити",
                validate: (dataInput) =>
                  !dataInput.includes(1) ||
                  "Тут я пишу повідомлення: цифра 1 заборонена",
              })}
            />{" "}
            <p>
              validate: (dataInput) =&gt; !dataInput.includes(1) || "Тут я пишу
              повідомлення: цифра 1 заборонена",
            </p>
          </label>
          {errorsPassword?.password3 && (
            <p>{errorsPassword?.password3.message}</p>
          )}
          <label>
            Confirm "confirm3":{" "}
            <input
              id="confirm3"
              {...registerPassword("confirm3", {
                required: "Тут я пишу повідомлення: обов'язково підтвердити",
                validate: (dataInput) =>
                  dataInput === watchPassword("password3") ||
                  "Паролі не збігаються",
                watch: "password3",
              })}
            />
            <p>
              <mark> validate:</mark> (dataInput) =&gt; dataInput ===
              watchPassword("password3") || "Паролі не збігаються", <br />
              <mark> watch: "</mark>password3",
            </p>
          </label>
          {errorsPassword?.confirm3 && (
            <p>{errorsPassword?.confirm3.message}</p>
          )}
          <button type="submit">submit</button>
        </form>

        {dataValidate && (
          <div>
            <p>валідація успішна</p>
            <p>Password: {dataValidate.password3}</p>
            <p>Confirm: {dataValidate.confirm3}</p>
          </div>
        )}
      </div>
      {/* ---------Card title + price*/}
      <div>
        <form className="form" onSubmit={handleSubmitCard(handlerOnSubmitCard)}>
          <label>
            <p>
              title:
              <br /> minLength: &#123; value: 3 <br /> pattern: &#123; value:
              [A-Za-z0-9\s]+$i <br />
              складається тільки з латиниці, цифр і пробілів, <br />
              закінчуватися на літеру i, щоб збігтися
            </p>
            <input
              id="title"
              {...registerCard("title", {
                minLength: {
                  value: 5,
                  message: "тут моє повідомлення: мін 5 символів",
                },

                pattern: {
                  value: /^[A-Za-z0-9\s]+i$/,
                  message:
                    "моє повідомлення: складається тільки з латиниці, цифр і пробілів - закінчуватись на i",
                },

                required: "моє повідомлення: Обов'язково заповнювати",
                validate: (dataInput) =>
                  !dataInput.includes(1) ||
                  "моє повідомлення: Заборонено вводити 1",
              })}
              placeholder="Назва товара"
            />
            <mark>errorsCard.title.message</mark> <br />
            {errorsCard?.title && <p>{errorsCard.title.message}</p>}
          </label>
          <label>
            <p>
              {" "}
              price: <mark>valueAsNumber</mark>:true
            </p>
            <input
              id="price"
              {...registerCard("price", {
                valueAsNumber: true,
                required: "моє повідомлення: Заборонено вводити 2",

                validate: (dataInputPrice) => {
                  let dataTitle = watchCardData("title");
                  if (dataTitle && dataTitle.length < 2) {
                    {
                      return "Назва title занадто коротка";
                    }
                  }
                  if (String(dataInputPrice).includes("2"))
                    return "моє повідомлення: Заборонено вводити 2";
                  return true;
                },
              })}
              placeholder="ціна"
            />
            {errorsCard?.price && <p>{errorsCard.price.message}</p>}
          </label>
          <button type="submit">submit</button>
        </form>
        {dataCard && (
          <div>
            <p>значення що відправились</p>
            <p>title: {dataCard.title}</p>
            <p>price: {dataCard.price}</p>
          </div>
        )}
        {errorsCard.title && (
          <div>
            <p>{errorsCard?.title?.message || "помилка валідації"}</p>
          </div>
        )}
      </div>
      {/* --------------async (1.07.00) */}

      <div>
        <h2>
          <mark> Асинхронна </mark> <br />
          validate:<mark> async(data)</mark> =&gt; &#123; <br />
          const isToken = await xxxx(data) <br />
          return !isToken || "Ім'я вже зайнято"
        </h2>
        <form
          className="form"
          onSubmit={handleSubmitAsynk(handleOnSubmitAsynk)}
        >
          <label>
            Email: validate: (dataInput) =&gt; dataInput.includes("@") || "моє
            повідомлення..."
            <input
              id="emailAsync"
              {...registerAsynk("emailAsync", {
                required: "vмоя валідація: ВВод значеень обов'язково",
                validate: (dataInput) =>
                  dataInput.includes("@") || "моя валідація: має містити '@'",
              })}
            />
            {errorsAsynk.emailAsync && <p>{errorsAsynk.emailAsync.message}</p>}
          </label>
          <button type="submit">submit</button>
        </form>
        {dataEmailAsynk && (
          <p> Відправили данні: {dataEmailAsynk.emailAsync}</p>
        )}
      </div>
      {/* --------------власна валідація */}
      <div>
        <h2>
          Власна Валідація<mark> validity: &#123; </mark>
          <br />
          x: (a) =&gt; умова <br />
          y: (b)=&gt; умова <br />
          &#125; <br />
          errors.xxx.types -Об'єкт з усіма помилками
          <mark>useForm( &#123;criterialMode: "all" &#125;)</mark>-
          errors.xxx.type = &#123;усі помилки&#125;
        </h2>
        <form
          className="form"
          onSubmit={handleSubmitCriteriaMode(handleCreteriaModeForm)}
        >
          <label>
            Age:
            <input
              id="age"
              {...registerCriteriaMode("age", {
                required: "моє повідомлення: Обов'язково заповнювати",
                validate: {
                  positive: (data) => data > 0 || "Вік має бути більше 0",
                  isAdult: (data) =>
                    data >= 18 || "вік має бути біше або рівним  18",
                },
              })}
              onChange={() => setCreteriaModeForm(null)}
            />
          </label>
          {errorsCriteriaMode.age?.types &&
            Object.values(errorsCriteriaMode.age.types).map((err, i) => (
              <p key={i} style={{ color: "red" }}>
                {err}
              </p>
            ))}
          <button type="submit">submit</button>
          {creteriaModeForm && (
            <p>
              Валідація пройдена! данні що відправили: {creteriaModeForm.age}
            </p>
          )}
        </form>
      </div>
      {/* -----------------valueAsNumber valueAsData setValueAs */}
      <div>
        <h2>
          <mark>valueAsNumber:</mark> boolean; <mark>valueAsData</mark>:
          boolean; <mark>setValueAs</mark> (value) =&gt;
        </h2>
        <div>
          <p className="accent">
            valueAsNumber: true → твоє поле стає числом, а не текстом. <br />
            valueAsDate: true → твоє поле стає датою, а не текстом. <br />{" "}
            validate → твої свої правила, наприклад "не менше 10", "число більше
            0" або "не можна вводити 1". Якщо правило не виконується →
            з`являється твоє повідомлення.
          </p>
        </div>
        <p>1.15.00</p>
        <form
          className="form"
          onSubmit={handleSubmitValueAsNumber(handleOnSubmitValueAsNumberForm)}
        >
          <label>
            Number:
            <p className="accent">
              <mark> valueAsNumber: true</mark>, <br />
              validate: &#123;
              <br />
              positive: (data) =&gt; data &gt; 0 || "Чісло більше 0",
              <br />
              maxData: (data) =&gt; data &lt; 100 || "Менше 100",
              <br />
              &#125;,
              <br />
              min: &#123;
              <br />
              value: 10, ...
              <br />
            </p>
            <input
              id="valAsNumber"
              {...registerValueAsNumber("valAsNumber", {
                required: "моє повідомлення: ОБов'язково заповнювати",
                valueAsNumber: true,
                validate: {
                  positive: (data) => data > 0 || "Чісло більше 0",
                  maxData: (data) => data < 100 || "Менше 100",
                },
                min: {
                  value: 10,
                  message: "мін значення 10",
                },
              })}
              onChange={() => setValueNumber(null)}
            />
            {errorsValueAsNumber.valAsNumber?.types && (
              <div>
                {Object.values(errorsValueAsNumber.valAsNumber?.types).map(
                  (val, index) => (
                    <p key={index} style={{ color: "red" }}>
                      {val}
                    </p>
                  )
                )}
              </div>
            )}
          </label>
          {valueNumber && (
            <p>Валідація пойденна, значення поля: {valueNumber}</p>
          )}
          <label>
            Data: (приклад 2020-02-03)
            <p className="accent">
              <mark> valueAsDate</mark>: true, <br /> validate: (data) =&gt;{" "}
              <br />(<mark>data instanceof Date</mark> &&
              !isNaN(data.getTime())) || "Невірна дата",
            </p>
            <input
              id="valAsData"
              {...registerValueAsNumber("valAsData", {
                required: true,
                valueAsDate: true,
                validate: (data) =>
                  (data instanceof Date && !isNaN(data.getTime())) ||
                  "моє повідомлення: Невірна дата (Приклад '2025-01-01')",
              })}
            />
          </label>
          {errorsValueAsNumber?.valAsData?.types && (
            <div>
              {Object.values(errorsValueAsNumber.valAsData.types).map(
                (el, index) => (
                  <p key={index}>{el}</p>
                )
              )}
            </div>
          )}
          {valueAsData && (
            <p>
              валідація пойдена Ваші данні valueAsData.toLocaleDateString():
              {valueAsData.toLocaleDateString()}
            </p>
          )}
          <button type="submit">submit</button>
        </form>
      </div>
      <a href="https://www.youtube.com/live/INcPJk1uaRY">
        <button className="btnLink"> Lesson(41.00) </button>
      </a>
    </>
  );
}

export default ReactHookForm;
