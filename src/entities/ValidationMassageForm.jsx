import { useRef, useState } from "react";

function ValidationMassageForm() {
  const [messageMain, setMessageMain] = useState([]);
  const [errorTextarea, setErrorTextarea] = useState(null);
  const [errorSelect, setErrorSelect] = useState(null);

  const [errorData, setErrorData] = useState(null);
  //--ref
  const refTextarea = useRef();
  const refSelect = useRef();

  //-valid data

  const inputValidation = (formData) => {
    // -----f------textarea
    if (formData.name === "textarea") {
      if (!formData.validity.valid) {
        setErrorTextarea(formData.validationMessage);
      } else {
        setErrorTextarea(null);
      }
    }
    // -----f------select
    if (formData.name === "select") {
      if (!formData.validity.valid) {
        setErrorSelect(formData.validationMessage);
      } else if (formData.value !== "a" && formData.value !== "b") {
        setErrorSelect(`Можно обратил лише: а або б`);
      } else {
        setErrorSelect(null);
      }
    }
  };
  // --submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;
    let msg = [];
    if (!formData.elements.textarea.validity.valid) {
      const validMessage = formData.elements.textarea.validationMessage;
      msg.push(
        `textarea: не валідне; validity.validationMessage: ${validMessage}  `
      );
    }
    if (!formData.elements.select.validity.valid) {
      const dataMessageError = formData.elements.select.validationMessage;
      msg.push(
        `select: не валідне;select.validationMessage: ${dataMessageError} `
      );
    } else if (
      formData.elements.select.value !== "a" &&
      formData.elements.select.value !== "b"
    ) {
      msg.push("select: можна обрати лише 'a/b'");
    }

    // --f-- message
    setMessageMain(msg);
    setErrorData(msg[0]);
  };
  // -------clear
  const handleClear = () => {
    if (refTextarea.current) refTextarea.current.value = "";
    if (refSelect.current) refSelect.current.value = "";
    setMessageMain([]);
    setErrorTextarea(null);
    setErrorSelect(null);
  };
  return (
    <>
      <h2> if(!formData.validity.valid)</h2>
      <h3>formData.validationMessage</h3>
      {errorData && (
        <p className="formData">
          <span>formData.validationMessage </span>: {errorData}
        </p>
      )}
      <form className="form" onSubmit={handleSubmit}>
        {errorTextarea && <p className="formData">{errorTextarea}</p>}
        <label>
          Textarea/ onInput: maxLength=&#123;5&#125;
          <textarea
            name="textarea"
            maxLength={5}
            onInput={(e) => inputValidation(e.target)}
            required
            ref={refTextarea}
          ></textarea>
        </label>
        {errorSelect && <p>{errorSelect}</p>}
        <label htmlFor="">
          {" "}
          Select /onChange:
          <select
            name="select"
            id="select01"
            onChange={(e) => inputValidation(e.target)}
            ref={refSelect}
            required
          >
            <option value="">---Виберіть--</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </label>
        <button type="submit">submit</button>
        <button type="button" onClick={handleClear}>
          clear
        </button>
      </form>
      <p className="formData">
        Повертає: Рядок, що містить повідомлення про валідацію, або порожній
        рядок, якщо елемент валідний.
      </p>
      {messageMain.length > 0 && (
        <ul className="formData">
          {messageMain.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ValidationMassageForm;
