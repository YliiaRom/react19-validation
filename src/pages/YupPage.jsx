import YupForm from "@/entities/YupForm";

function YupPage() {
  return (
    <div className="yupPageWrapper">
      <h1>
        npm install @hookform/resolvers yup <br />
        &lt;input &#123; ...register("name") &#125; &gt;
        <br />
        &#123;errors.name.message&#125;
      </h1>
      <p className="accent">
        @hookform/resolvers - Зв'язує Yup з React Hook Form
      </p>
      <a href="https://github.com/jquense/yup" target="_blank">
        <button className="btnLink">(gitHub) Yup- бібліотека валідації</button>
      </a>
      <a
        href="https://github.com/jquense/yup?tab=readme-ov-file#api"
        target="_blank"
      >
        <button className="btnLink">(Doc) Yup- api</button>
      </a>
      <a href="https://github.com/jquense/yup" target="_blank">
        <button className="btnLink">Schema Validation</button>
      </a>
      <h2>
        const &#123;...register, handleSubmit, formState:
        &#123;errors&#125;&#125; = useForm(&#123;resolver:
        yupResolver(schema)&#125; )
      </h2>
      <YupForm />
    </div>
  );
}

export default YupPage;
