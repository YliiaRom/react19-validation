import ControllerDescription from "@/entities/user/ui/ControllerDescription";
import ControllerFirstDescription from "@/entities/user/ui/ControllerFirstdescription";
import RadioGroutForm from "@/features/userRegistration/ui/RadioGroutForm";
import RegisterForm from "@/features/userRegistration/ui/RegisterForm";

function ControllerPage() {
  return (
    <div className="controllerPageWrapper">
      <p className="accent">
        Controller - це утиліта з react-hook-form, яка використовується для
        інтеграції кастомних та контрольованих компонентів (controlled
        components) з екосистемою react-hook-form.
      </p>
      <h1>Controller- компонент-обгортка</h1>
      <details>
        <summary>
          <mark>
            &lt; Controller- Діє як «шпигун» за вашими вхідними даними —
            відстежує їх, повідомляє про зміни та встановлює значення{" "}
          </mark>
        </summary>
        <p className="accent">
          <mark> &lt; Controller </mark>- компонент-обгортка <br />
          <mark> name="</mark>fieldName" // Унікальне ім'я вашого вводу(назва
          поля вводу)
          <br />
          <mark> control=&#123;control&#125;</mark>// Об`єкт отриманий у
          результаті виклику useForm() <br />
          <mark> defaultValue</mark>=''// Вам потрібно задати значення або
          defaultValue на рівні поля, або defaultValues на рівні useForm. <br />
          Якщо ви використали defaultValues у useForm, цей пропс можна
          пропустити. <br />
          Якщо ваша форма викликатиме reset із початковими значеннями, тоді в
          useForm обов`язково потрібно передати defaultValues. <br />
          <mark>rules=&#123;&#123; </mark>required:true&#125;&#125; //Правила
          валідації(альтернатива Yup) <br />
          Правила перевірки у тому ж форматі для параметрів register, який
          включає: <br />
          required — обов`язкове поле <br /> min — мінімальне значення (для
          чисел) <br />
          max — максимальне значення (для чисел) <br /> minLength — мінімальна
          довжина (для рядків) <br /> maxLength — максимальна довжина (для
          рядків) <br />
          pattern — перевірка за регулярним виразом validate — кастомна
          перевірка
          <br />
          <mark>
            {" "}
            render=&#123;(&#123; field, fieldState, formState&#125;) =&gt;{" "}
          </mark>
          ( <br />
          <mark> &lt;Input &#123;...field&#125;</mark> <br /> // компонент який
          треба відрендерити і передати йому стани <br />
          <mark>
            {" "}
            error=&#123;fieldState.error?.message&#125; /&gt; )&#125;
          </mark>{" "}
          <br /> //Передача помилок <br />
          render=&#123;() =&gt; ()&#125; ... -Функція, яка повертає елемент
          React і надає можливість прикріплювати події та значення до
          компонента. <br />
          Надає дочірньому компоненту властивості onChange, onBlur, name, ref,
          value, а також об`єкт, що містить певний стан вводу (fieldState)
        </p>
      </details>
      <p> Посилання на документацію:</p>
      <a
        href="https://react-hook-form.com/docs/usecontroller/controller"
        target="_blank"
      >
        <button className="btnLink">(Doc) Controller</button>
      </a>
      <ControllerFirstDescription />
      <RadioGroutForm />
      <ControllerDescription />
      <a href="https://www.youtube.com/live/INcPJk1uaRY" target="_blank">
        <button className="btnLink">1.38.20</button>
      </a>
      <RegisterForm />
    </div>
  );
}

export default ControllerPage;
