import bgImg from "@/assets/img/logo1.png";
function HomePage() {
  return (
    <div className="homePageWrapper">
      <div style={{ position: "relative" }}>
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="imgLogo"
        ></div>
      </div>

      <div className="descriptionForTitle">
        <p>
          React Hook Form — бібліотека для роботи з формами в React, <br />{" "}
          useForm: основний хук для роботи з формами.
          <br />
          бібліотека використовує референції (refs) для доступу до значень
          полів. <br /> npm install react-hook-form
        </p>
        <p>
          Validation. Інтеграція з Yup <br />
          npm install @hookform/resolvers yup <br />
          https://react-hook-form.com/get-started#SchemaValidation <br />
          https://github.com/jquense/yup <br />
        </p>
      </div>

      <div className="bodyDescription">
        <div className="numCardDescription">1</div>
        <div className="line"></div>
        <div className="homeCardDescription">
          <h2>
            Сайт тестування даних у формі онлайн: https://httpbin.org/post
          </h2>
          <a href="https://httpbin.org/" target="_blank">
            <button type="button" className="btnLink">
              Site Test Form
            </button>
          </a>
        </div>
      </div>

      <div className="cardBox">
        <div className="card">
          <div className="boxIcon">
            <div className="cloud-icon"></div>
            <div className="boxShadow"></div>
          </div>
          <p>Validate</p>
        </div>
        <div className="bodyDescription absoluteBoxInCardBox">
          <div className="numCardDescription">2</div>
          <div className="line"></div>
          <div className="homeCardDescription">
            <h2>Бібліотека для валідації форм: https://react-hook-form.com/</h2>
            <a href="https://react-hook-form.com/" target="_blank">
              <button type="button" className="btnLink">
                react-hook-form
              </button>
            </a>
            <a
              href="https://github.com/jquense/yup?tab=readme-ov-file#api"
              target="_blank"
            >
              <button className="btnLink">(Doc) Yup- api</button>
            </a>
          </div>
        </div>
      </div>

      <div className="bodyDescription">
        <div className="numCardDescription">3</div>
        <div className="line"></div>
        <div className="homeCardDescription">
          <h2>
            Валідація (бібліотеки) @hookform/resolvers - Зв'язує Yup з React
            Hook Form
          </h2>
          <p>npm install @hookform/resolvers yup</p>
          <a href="https://github.com/jquense/yup" target="_blank">
            <button className="btnLink">
              (gitHub) Yup- бібліотека валідації
            </button>{" "}
          </a>
          <a href="https://github.com/jquense/yup" target="_blank">
            <button className="btnLink">Schema Validation</button>
          </a>
        </div>
      </div>
      <div className="bodyDescription">
        <div className="numCardDescription">4</div>
        <div className="line"></div>
        <div className="homeCardDescription">
          <h2>Утіліта Controller від react-hook-form</h2>

          <a
            href="https://react-hook-form.com/docs/usecontroller/controller"
            target="_blank"
          >
            <button className="btnLink">(Doc) Controller</button>
          </a>
        </div>
      </div>

      <div className="descriptionForTitle">
        <p>
          Утіл`язати value і onChange з компонентами, які не підтримують нативне
          API ref. <br />
          Зберігати єдиний підхід до валідації, сабміту і відстеження помилок у
          формі. <br />
          <a
            href="https://react-hook-form.com/docs/usecontroller/controller"
            target="_blank"
          >
            <button className="btnLink">(Doc) Controller</button>
          </a>
        </p>
        <p>
          Для простих HTML елементів (&lt;input&gt;, &lt;textarea&gt;,
          &lt;select&gt;) використовується register. <br />
          Для кастомних або бібліотечних компонентів — Controller. <br />
          Використовувати бібліотечні UI-компоненти (react-select, MUI
          RadioGroup, DatePicker, тощо).
        </p>
      </div>
    </div>
  );
}

export default HomePage;
