import { useRef, useState } from "react";

function CheckValidityForm() {
  const [message, setMessage] = useState("");
  const refText = useRef();
  const refPassword = useRef();

  const handlerSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    const form = e.target;
    if (form.checkValidity()) {
      setMessage("form.checkValidity = true / Усі поля валідні");
    } else {
      setMessage(
        "form.checkValidity = false / Деякі поля НЕ валідні = Пройтися по полях щоб знайти"
      );
    }
  };
  const handleClear = () => {
    if (refText.current) refText.current.value = "";
    if (refPassword.current) refPassword.current.value = "";
    setMessage("");
  };
  return (
    <>
      <h2>
        для валідації окремих полів, коли користувач вводить дані (подія input)
        або залишає поле (подія blur), надаючи зворотний зв'язок у реальному
        часі.
      </h2>
      <p className="formData">{message}</p>
      <form className="form" onSubmit={handlerSubmit} id="checkValidityForm">
        <label>
          text: maxLength=&#123;5&#125;
          <input type="text" maxLength={5} ref={refText} required />
        </label>
        <label>
          Password: minLength=&#123;6&#125; maxLength=&#123;8&#125;
          <input
            type="password"
            minLength={6}
            maxLength={8}
            title="min-6 max-8"
            ref={refPassword}
            required
          />
        </label>
        <button type="submit">submit</button>
        <button type="button" onClick={handleClear}>
          clear data
        </button>
      </form>
      <div className="formData">
        const handlerSubmit = (e) =&gt; &#123;
        <br />
        e.preventDefault();
        <br />
        <br />
        const form = e.target;
        <br />
        if (form.checkValidity()) &#123;
        <br />
        setMessage("form.checkValidity = true / Усі поля валідні");
        <br />
        &#125; else &#123;
        <br />
        setMessage(
        <br />
        "form.checkValidity = false / Деякі поля НЕ валідні = Пройтися по полях
        щоб знайти"
        <br />
        );
        <br />
        &#125;
        <br />
        &#125;;
        <br />
      </div>
    </>
  );
}

export default CheckValidityForm;
