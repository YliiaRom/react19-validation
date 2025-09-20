import { useRef, useState } from "react";

function ReportValidityForm() {
  const [message, setMessage] = useState("");
  const refText = useRef();
  const refPassword = useRef();

  const handlerSubmit = (e) => {
    // e.preventDefault();
    // setMessage("");
    // const form = e.target;
    // let isValid = true;
    // if (!form.elements.text.reportValidity()) {
    //   setMessage("!xxx.reportValidity()  => значення не валідне");
    //   isValid = false;
    // }
    // if (!form.elements.password.reportValidity()) {
    //   setMessage("!xxx.reportValidity() => значення не валідне");
    //   isValid = false;
    // }
    // if (isValid) {
    //   setMessage("Умова: Якщо немає / !... .reportValidity()");
    // }
    e.preventDefault();
    const form = e.target;
    const errors = [];

    if (!form.elements.text.reportValidity()) {
      errors.push("Поле text не валідне ❌");
    }
    if (!form.elements.password.reportValidity()) {
      errors.push("Поле password не валідне ❌");
    }

    if (errors.length > 0) {
      setMessage(errors.join(" | "));
    } else {
      setMessage("Усі поля валідні ✅");
    }
  };

  const handlerClear = () => {
    if (refText.current) refText.current.value = "";
    if (refPassword.current) refPassword.current.value = "";
    setMessage("");
  };
  return (
    <>
      <div className="formData">{message}</div>

      <div className="formData">
        браузер одразу відкриває власне повідомлення про помилку, і React може
        його не відобразити message
      </div>
      <form className="form" onSubmit={handlerSubmit}>
        <label>
          text: minLength=&#123;3&#125;
          <input type="text" name="text" minLength={3} ref={refText} required />
        </label>
        <label>
          <input
            type="password"
            name="password"
            minLength={5}
            ref={refPassword}
            required
          />
        </label>
        <button type="submit">submit</button>
        <button type="button" onClick={handlerClear}>
          clear
        </button>
      </form>
      <div className="formData">
        {" "}
        if (!form.elements.text.reportValidity()) ....."message"
      </div>
    </>
  );
}

export default ReportValidityForm;
