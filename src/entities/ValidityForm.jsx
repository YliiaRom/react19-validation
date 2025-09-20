import { useRef, useState } from "react";

function ValidityForm() {
  const [messageMain, setMessageMain] = useState([]);
  const [dataValidityState, setDataValidityState] = useState(null);
  const refText = useRef();
  const refPassword = useRef();

  let dataValidity = {
    "validity.valueMissing/tooShort/patternMismatch/valid": "true/false",
  };

  const validateForm = (formData) => {
    const msg = [];
    if (formData.elements.passwordRequired.validity.valueMissing) {
      msg.push("поле  Required: Пароль обов'язковий");
    }

    if (formData.elements.password.validity.tooShort) {
      msg.push(
        `поле  Password: Пароль короткий - мін${formData.elements.password.minLength} символів`
      );
    }
    if (formData.elements.pattern.validity.patternMismatch) {
      msg.push(
        `поле  Pattern: Не відповідає умові патерну- ${formData.elements.pattern.pattern}`
      );
    }
    if (formData.elements.passwordRequired.validity.valid) {
      msg.push("поле  Required: валідно");
    }
    if (formData.elements.password.validity.valid) {
      msg.push("поле  Password: валідно");
    }
    if (formData.elements.pattern.validity.valid) {
      msg.push("поле  Pattern: валідно");
    }
    return msg;
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const formData = e.target;
    dataValidity = {
      text_valueMessage:
        formData.elements.passwordRequired.validity.valueMissing,
      password_tooShort: formData.elements.password.validity.tooShort,
      pattern_patternMismatch:
        formData.elements.pattern.validity.patternMismatch,
      validPasswordRequired: formData.elements.passwordRequired.validity.valid,
      validPassword: formData.elements.password.validity.valid,
      validPattern: formData.elements.pattern.validity.valid,
    };
    // const message = [];

    // if (formData.elements.passwordRequired.validity.valueMissing) {
    //   message.push("поле Required -Пароль обов'язковий");
    // }

    // if (formData.elements.password.validity.tooShort) {
    //   message.push(
    //     `поле Password -Пароль короткий - мін${formData.elements.password.minLength} символів`
    //   );
    // }
    // if (formData.elements.pattern.validity.patternMismatch) {
    //   message.push(
    //     `поле Pattern- Не відповідає умові патерну- ${formData.elements.pattern.pattern}`
    //   );
    // }
    // if (formData.elements.passwordRequired.validity.valid) {
    //   message.push("поле  Required: валідно");
    // }
    // if (formData.elements.password.validity.valid) {
    //   message.push("поле  Password: валідно");
    // }
    // if (formData.elements.pattern.validity.valid) {
    //   message.push("поле  Pattern: валідно");
    // }
    const messageData = validateForm(formData);
    setMessageMain(messageData);
    // setMessageMain(message);
    setDataValidityState(dataValidity);
  };

  const handlerClear = () => {
    if (refText.current) refText.current.value = "";
    if (refPassword.current) refPassword.current.value = "";
    setMessageMain([]);
    setDataValidityState(null);
  };

  return (
    <>
      <h2>Required - Обов'язково </h2>
      <ul className="formData">
        {messageMain.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {dataValidityState && (
        <ul className="formData">
          {Object.entries(dataValidityState).map(([item, value]) => (
            <li key={item}>{`${item} - ${value}`}</li>
          ))}
        </ul>
      )}
      <p style={{ wordWrap: "break-word" }}>
        onInput=&#123;(e) =&gt;
        setMessageMain(validateForm(e.target.form))&#125;
      </p>

      <form className="form" onSubmit={handlerSubmit}>
        <p>
          (formData.elements.passwordRequired.validity.valueMissing) &#123;{" "}
          <br />
          msg.push("поле Required: Пароль обов'язковий");
          <br />
          &#125;
        </p>
        <label>
          Password: required
          <input
            type="password"
            name="passwordRequired"
            required
            onInput={(e) => setMessageMain(validateForm(e.target.form))}
            ref={refText}
          />
        </label>
        <label>
          Password: minLength=&#123;6&#125;
          <input
            type="password"
            name="password"
            minLength={6}
            ref={refPassword}
            onInput={(e) => setMessageMain(validateForm(e.target.form))}
            required
          />
        </label>
        <label>
          Password: pattern "[0-9]&#123;6&#125;"
          <input
            type="password"
            name="pattern"
            pattern="[0-9]{6}"
            onInput={(e) => setMessageMain(validateForm(e.target.form))}
            required
          />
        </label>

        <button type="submit">submit</button>
        <button type="button" onClick={handlerClear}>
          clear
        </button>
      </form>
      <ul className="formData">
        {messageMain.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {dataValidityState && (
        <ul className="formData">
          {Object.entries(dataValidityState).map(([item, value]) => (
            <li key={item}>{`${item} - ${value}`}</li>
          ))}
        </ul>
      )}
      <p>
        Для необов`язкового поля password і pattern поле вважається "валідним",{" "}
        <br />
        навіть якщо воно порожнє, тому що: password без required → порожній{" "}
        <br />
        рядок = валідно (немає valueMissing, немає tooShort, просто порожнє{" "}
        <br />
        значення) pattern без required → порожній рядок теж валідно, тому що
        patternMismatch перевіряється лише якщо поле не порожнє
      </p>
    </>
  );
}

export default ValidityForm;
