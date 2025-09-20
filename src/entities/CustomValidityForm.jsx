import { useRef, useState } from "react";

function CustomValidityForm() {
  const [count, setCount] = useState(1);
  const passwordMainRef = useRef();
  const passwordCustomRef = useRef();
  const passwordFirstRef = useRef();
  const passwordSecondRef = useRef();
  const selectRef = useRef();

  //--Submit
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(`--------handlerSubmitt`);

    const form = e.target;

    passwordCustomRef.current.setCustomValidity("");

    if (passwordMainRef.current.value !== passwordCustomRef.current.value) {
      passwordCustomRef.current.setCustomValidity(
        "passwordCustomRef.current.setCustomValidity: Паролі не збігаються"
      );
    } else {
      passwordCustomRef.current.setCustomValidity("");
    }
    // Показати повідомлення про помилку
    form.reportValidity();
    setCount((prev) => prev + 1);
  };
  // ---clear
  const handlerClear = () => {
    if (passwordFirstRef.current) passwordFirstRef.current.value = "";
    if (passwordSecondRef.current) passwordSecondRef.current.value = "";
    if (selectRef.current) selectRef.current.value = "";
    if (passwordMainRef.current) passwordMainRef.current.value = "";
    if (passwordCustomRef.current) passwordCustomRef.current.value = "";
  };

  return (
    <>
      <h2>
        Дозволяє встановити власне повідомлення про валідацію для поля вводу.
      </h2>
      <form className="form" onSubmit={handlerSubmit}>
        <h2> форму с 1 перевіркой / інакше лізе перше повідомлення</h2>

        <label>
          Password: 1
          <input
            type="password"
            name="mainPassword"
            ref={passwordMainRef}
            onChange={() => passwordMainRef.current.setCustomValidity("")}
            required
          />
        </label>
        <h2>
          <mark>onChange=&#123;</mark>() =&gt;
          passwordCustomRef.current.setCustomValidity("")&#125;
        </h2>
        <label>
          Password:2 -(Comfirm ) повторити пароль
          <input
            type="password"
            name="confirm"
            ref={passwordCustomRef}
            onChange={() => passwordCustomRef.current.setCustomValidity("")}
            required
          />
        </label>
        <h2 style={{ wordWrap: "break-word" }}>
          обов'язково <mark>formData.reportValidity()</mark>- <br /> інакше не
          покаже(завжді покаже message з 1 похибки
          <br /> В умовах пропісати спочатку останні(умови select,....password)
          )
        </h2>

        <button type="submit">submit</button>
        <button type="button" onClick={handlerClear}>
          clear
        </button>
      </form>
      <p className="formData">
        Якщо message - непорожній рядок, елемент стає невалідним, і
        validity.customError стає true. <br /> Якщо message - порожній рядок ,
        власна помилка очищається, і елемент стає валідним (якщо інші обмеження
        HTML5 не порушені).
      </p>
      <p className="formData">
        показав повідомлення, потрібно викликати ще reportValidity() або ж
        перевірити checkValidity() в кінці formData.reportValidity();
      </p>
      <form className="form"></form>
      {/* <hr />
        <label>
          Password: pattern="[0-5]{3}"
          <input
            type="password"
            pattern="[0-5]{3}"
            ref={passwordFirstRef}
            required
          />
        </label>
        <label>
          Password: pattern="[5-9]{5}"
          <input
            type="password"
            pattern="[5-9]{5}"
            ref={passwordSecondRef}
            required
          />
        </label>
        <hr /> */}

      {/* select */}
      {/* <select name="select" id="select2" ref={selectRef} required>
          <option value="">-оберіть значення-</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select> */}
    </>
  );
}

export default CustomValidityForm;
