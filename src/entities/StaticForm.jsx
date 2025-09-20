import { useRef, useState } from "react";

function StaticForm() {
  const [data, setData] = useState([]);
  const refText = useRef();
  const refEmail = useRef();
  const refUrl = useRef();
  const refNumber = useRef();
  const refMinMax = useRef();
  const refData = useRef();
  const refMaxLengthPassword = useRef();
  const refPattern = useRef();
  const refStep = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setData([
  //     refText.current.value,
  //     refEmail.current.value,
  //     refUrl.current.value,
  //     refNumber.current.value,
  //     refMinMax.current.value,
  //     refData.current.value,
  //     refMaxLengthPassword.current.value,
  //     refPattern.current.value,
  //     refStep.current.value,
  //   ]);
  // };
  let formData = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    for (let el of e.target.elements) {
      if (el.name) {
        formData[el.name] = el.value;
      }
    }
    setData(formData);
  };
  console.log(data);
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          text: maxLength={3} required
          <input
            type="text"
            name="typeText"
            placeholder=" maxLength={3} required"
            maxLength={3}
            ref={refText}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="typeEmail"
            placeholder="name='typeEmail'"
            ref={refEmail}
          />
        </label>
        <label>
          Url:
          <input
            type="url"
            name="typeUrl"
            placeholder="type='url'"
            ref={refUrl}
          />
        </label>
        <label>
          Number:
          <input
            type="number"
            name="typeNumber"
            placeholder="name='typeNumber'"
            ref={refNumber}
          />
        </label>
        <p>min / max</p>
        <label>
          Number: min="2" max="3"
          <input
            type="number"
            name="typeMinMaxNumber"
            min="2"
            max="3"
            placeholder="min='2' max='3'"
            ref={refMinMax}
          />
        </label>

        <label>
          Date: min="25-01-01"
          <input type="date" name="typeDate" min="25-01-01" ref={refData} />
        </label>
        <label>
          Password: minLength=&#123;6&#125; maxLength=&#123;8&#125;
          <input
            type="password"
            name="typePassword"
            minLength={6}
            maxLength={8}
            ref={refMaxLengthPassword}
          />
        </label>
        <p>Складна валідація</p>
        <label>
          Text: pattern="[0-9]&#123;5&#125;" <br />
          title="Поштовий індекс з 5 цифр"
          <input
            type="text"
            name="typePattern"
            pattern="[0-9]{5}"
            title="Поштовий індекс з 5 цифр"
            ref={refPattern}
          />
        </label>
        <label>
          Number: step="0.5"
          <input type="number" name="typeStepNumber" step="0.5" ref={refStep} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul className="formData">
        {Object.entries(data).map(([name, value]) => {
          return (
            <li key={name}>
              <strong>
                {name} - {value}
              </strong>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default StaticForm;
