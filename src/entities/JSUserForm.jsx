import React, { useRef, useState } from "react";
import logo from "@/assets/img/img-url.jpg";
const LANGUAGES = [
  "Англійська",
  "Німецька",
  "Французька",
  "Іспанська",
  "Українська",
  "Польська",
];
function JSUserForm() {
  const formRef = useRef();
  const [error, setError] = useState("");
  const [photoURL, setPhotoURL] = useState(null);
  const [photoLogoURL, setPhotoLogoURL] = useState(null);
  const [photoUserURL, setPhotoUserURL] = useState(null);
  const [passwordMsg, setPasswordMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = formRef.current;
    console.log(`--------start handleSubmit`);
    // HTML5 validation
    //--.checkValidity() пробігає по всіх полях перевіряє ваалідність для кожного с полів
    if (!form.checkValidity()) {
      //якщо є не валідні reportValidity() - повідомлення/ -спліваючі вікна
      console.log(`--------start  if (!form.checkValidity())`);
      form.reportValidity();
      return;
    }

    // ------------ Custom JS validation -----------
    const salaryInput = form.salary;

    const validitySalary = salaryInput.validity;
    if (validitySalary.valueMissing) {
      setPasswordMsg(`Занадто мала`);
      validitySalary.focus();
      return;
    }
    if (validitySalary.value < 4000) {
      setPasswordMsg(`Менше 4000 - це дуже мало!`);
      validitySalary.focus();
      return;
    }

    // 1. Password validation (JS, дублює логіку з onInput)

    const passwordInput = form.password;
    //--.validity > .valueMissing /.tooShort/.patternMismatch/.valid

    const validity = passwordInput.validity;
    console.log(`-------passwordInput.validity`);

    if (validity.valueMissing) {
      setPasswordMsg("Пароль обов'язковий.");
      console.log(
        `----passwordInput.validity.valueMissing + passwordInput.focus()`
      );
      passwordInput.focus();
      return;
    } else if (validity.tooShort) {
      console.log(
        `----passwordInput.validity.tooShort/ + passwordInput.focus() `
      );
      setPasswordMsg(
        `Пароль занадто короткий. Мінімум ${passwordInput.minLength} символів.`
      );
      passwordInput.focus();
      return;
    } else if (validity.patternMismatch) {
      console.log(
        `----passwordInput.validity.patternMismatch/ + passwordInput.focus() `
      );
      setPasswordMsg("Пароль не відповідає потрібному шаблону.");
      passwordInput.focus();
      return;
    } else if (!validity.valid) {
      console.log(
        `----passwordInput.!validity.valid/ + passwordInput.focus() `
      );
      setPasswordMsg("Пароль некоректний.");
      passwordInput.focus();
      return;
    } else {
      console.log(`----passwordInput.validity.valid `);
      setPasswordMsg("");
    }

    // 2. --------- Дати навчання ---------
    const start = new Date(form.startDate.value);
    const end = new Date(form.endDate.value);
    const diffYears = (end - start) / (1000 * 60 * 60 * 24 * 365.25);
    if (end <= start || diffYears < 5) {
      setError(
        "Дата закінчення навчання має бути більшою за дату початку і різниця повинна бути більше 5 років!"
      );
      return;
    }

    const formData = new FormData(form);
    try {
      const res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert("Дані успішно надіслані!\n" + JSON.stringify(data.form, null, 2));
    } catch (err) {
      setError("Помилка при надсиланні: " + err.message);
    }
  };
  //========photo
  const handlePhotoChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoURL(url);
    } else {
      setPhotoURL(null);
    }
  };

  const handlerChangeLogo = (e) => {
    const fileLogo = e.target.files && e.target.files[0];
    if (fileLogo) {
      const urlLogo = URL.createObjectURL(fileLogo);
      setPhotoLogoURL(urlLogo);
    } else {
      setPhotoLogoURL(null);
    }
  };

  const handlerChangePhotoUser = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const urlPhotoUser = URL.createObjectURL(file);
      setPhotoUserURL(urlPhotoUser);
    } else {
      setPhotoUserURL(null);
    }
  };
  return (
    <>
      <h2>
        {" "}
        Данні відсилаються на : https://httpbin.org/post <br /> Сайт тестування
        форм
      </h2>
      <a href="https://httpbin.org/" target="_blank">
        <button type="button" className="btnLink">
          Site Test Form
        </button>
      </a>
      <p className="formData">
        <span>
          {" "}
          const formData = <mark>new FormData(form)</mark>;
        </span>{" "}
        <br /> try &#123;
        <br />
        const res = await fetch("https://httpbin.org/post", &#123;
        <br />
        method: "POST",
        <br />
        body: formData,
        <br />
        &#125;);
        <br />
        const data = await res.json();
        <br />
        alert("Дані успішно надіслані!\n" + JSON.stringify(data.form, null, 2));
        <br />
        &#125; catch (err) &#123;
        <br />
        setError("Помилка при надсиланні: " + err.message);
        <br />
        &#125;
        <br />
        &#125;;
      </p>
      <form ref={formRef} onSubmit={handleSubmit} noValidate className="jsForm">
        <h2>
          form: ref=&#123;formRef&#125; onSubmit=&#123;handleSubmit&#125;
          <mark> noValidate</mark>;
        </h2>
        <label>
          Ім'я: minLength=&#123;2&#125; maxLength=&#123;30&#125;
          <input
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={30}
          />
        </label>
        <p>
          xxx..validity --&gt; (xxx.valueMissing/ xxx.tooShort)--&gt;
          setPasswordMsg("Пароль обов'язковий.")--&gt; xxx<mark>.focus()</mark>{" "}
          --&gt; return
        </p>
        <br />
        <label>
          Стаж (років):
          <input name="experience" type="number" min={0} max={60} required />
        </label>
        <br />
        <label>
          Заробітна плата: <br />
          min=&#123;4700&#125; max=&#123;6000000&#125;
          <br />
          XXX.validity.... <br /> validitySalary.focus()
          <input
            name="salary"
            type="number"
            min={4700}
            max={6000000}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <br />
        <label>
          Мови:multiple required <br />
          multiple-дозволяє вибрати кілька варіантів <br />
          Ctrl/Cmd або Shift
          <select name="languages" multiple required>
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Сімейний стан: select required
          <select name="familyStatus" required>
            <option value="">Оберіть...</option>
            <option value="single">Неодружений/а</option>
            <option value="married">Одружений/а</option>
            <option value="divorced">Розлучений/а</option>
          </select>
        </label>
        <hr />
        <div
          style={{
            backgroundImage: `url(${logo})`,
          }}
          className="formImgExample"
        ></div>
        <br />
        <label>
          Фото:
          <input
            name="photo"
            type="file"
            accept="image/*"
            required
            onChange={handlePhotoChange}
          />
        </label>
        <h2>
          accept="image/*" — обмеження: користувач може вибрати тільки
          зображення (jpg, png, gif, webp, svg, …
        </h2>
        {photoURL && (
          <div style={{ marginTop: 8 }}>
            <img
              src={photoURL}
              alt="Мініатюра"
              style={{
                maxWidth: 120,
                maxHeight: 120,
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}
        <hr />
        <label>
          Logo Photo
          <input
            name="photoLogo"
            type="file"
            accept="image/*"
            onChange={handlerChangeLogo}
            required
          />
          {photoLogoURL && (
            <div>
              <img
                src={photoLogoURL}
                alt="logo"
                style={{
                  maxWidth: 120,
                  maxHeight: 120,
                  border: "1px solid #ccc",
                }}
              />
            </div>
          )}
        </label>
        <label>
          Photo User: (type="file")
          <input
            name="photoUser"
            type="file"
            accept="image/*"
            onChange={handlerChangePhotoUser}
            required
          />
          {photoUserURL && (
            <div>
              <img
                src={photoUserURL}
                alt="photo user"
                style={{
                  maxWidth: "120px",
                  maxHeight: "120px",
                  border: "1px solid #999",
                }}
              />
            </div>
          )}
        </label>
        <hr />
        <label>
          Чи є авто:
          <input name="hasCar" type="checkbox" />
        </label>
        <label>
          Куріння:
          <input name="habits" type="checkbox" />
        </label>
        <br />
        <label>
          Статус: <br />
          type="radio" value="yes" required
          <input name="marriedStatus" type="radio" value="yes" required />{" "}
          Одружений
          <input name="marriedStatus" type="radio" value="no" required />{" "}
          Неодружений
        </label>
        <br />
        <label>
          Дата народження: type="date" required
          <input name="birthDate" type="date" required />
        </label>
        <br />
        <label>
          Дата початку навчання:
          <input name="startDate" type="date" required />
        </label>
        <br />
        <label>
          Дата закінчення навчання:
          <input name="endDate" type="date" required />
        </label>
        <br />
        <label>
          Пароль: minLength=&#123;6&#125; <br />
          pattern="^(?=.*[A-Za-z])(?=.*\d).&#123;6,&#125;$" <br />
          (6символів / min1 букв= початок /min1 цифра)
          <input
            name="password"
            type="password"
            required
            minLength={6}
            pattern="^(?=.*[A-Za-z])(?=.*\d).{6,}$"
            autoComplete="new-password"
          />
        </label>
        {passwordMsg && (
          <div
            style={{
              color: passwordMsg.includes("добре") ? "green" : "red",
              marginBottom: 8,
            }}
          >
            {passwordMsg}
          </div>
        )}
        <br />
        <button type="submit">Надіслати</button>
      </form>
      {error && (
        <div style={{ color: "red", marginTop: 16, textAlign: "center" }}>
          {error}
        </div>
      )}
    </>
  );
}

export default JSUserForm;
