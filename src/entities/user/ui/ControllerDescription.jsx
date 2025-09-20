function ControllerDescription() {
  return (
    <div className="controllerDescWrapper">
      <div>
        <h2>Input.jsx</h2>
        <h3>
          {" "}
          #1-📂shared --&gt; 📂ui --&gt; 📄 Input.jsx / Select.jsx /
          Textarea.jsx
        </h3>
        <p className="accent">
          function Input(&#123;<mark> label, error, hint, ...rest </mark>&#125;)
          &#123; <br />
          return (<br />
          &lt;div&gt;
          <br />
          &lt;label&gt;
          <br />
          &#123;label && label&#125;
          <br />
          &lt;input <mark>&#123;...rest&#125;</mark> /&gt;
          <br />
          &lt;/label&gt;
          <br />
          &#123;hint && !error && &lt;div&gt;&#123;hint&#125;&lt;/div&gt;&#125;
          <br />
          &#123;<mark>error</mark> && &lt;p
          className="error"&gt;&#123;error&#125;
        </p>
      </div>

      <div>
        <h2>Schema</h2>
        <h3>
          #2-📂entities --&gt;📂user --&gt; 📂model --&gt; 📄 validation.js{" "}
        </h3>
        <p className="accent">
          import * as yup from "yup";
          <br />
          export const registerSchema = <mark>yup.object</mark>()
          <mark>.shape</mark>(&#123;
          <br />
          <mark> nickName:</mark> yup
          <br />
          .string()
          <br />
          .trim()
          <br />
          .min(1, "min 1 символ")
          <br />
          .max(30, "max 30 символів")
          <br />
          .required("вкажіть свій нікнейм"),
          <br />
          <mark> email:</mark> yup
          <br />
          .string()...
        </p>
      </div>
      <div>
        <h2>Controller</h2>
        <h3>
          #3-📂features --&gt;📂userRegisteration --&gt; 📂model --&gt; 📄
          useRegisterForm.js{" "}
        </h3>
        <p className="accent">
          import &#123; registerSchema &#125; from
          "@/entities/user/model/validation";
          <br />
          import &#123; yupResolver &#125; from "@hookform/resolvers/yup";
          <br />
          import &#123; useMemo &#125; from "react";
          <br />
          import &#123; Controller, useForm &#125; from "react-hook-form";
          <br />
          <br />
          let <mark>defaultValues</mark> = &#123;
          <br />
          name: "",
          <br />
          age: "",
          <br />
          married: "no",
          <br />
          &#125;;
          <br />
          <br />
          export const <mark>useRegisterForm </mark>= () =&gt; &#123;
          <br />
          const form = <mark>useForm</mark>(&#123;
          <br />
          mode: "onBlur",
          <br />
          defaultValues,
          <br />
          <mark> resolver: yupResolver(registerSchema)</mark>,
          <br />
          &#125;);
          <br />
          const field = useMemo(
          <br />
          () =&gt; (&#123;
          <br />
          <mark> Controller</mark>,
          <br />
          <mark>errors: </mark>form.formState.errors,
          <br />
          &#125;),
          <br />
          [form.formState.errors]
          <br />
          ); <mark>return &#123; ...form, field &#125;;</mark>
          <br />
          &#125;;
        </p>
      </div>
      <div>
        <h2>Form</h2>
        <h3>
          #3-📂features --&gt;📂userRegisteration --&gt; 📂ui --&gt; 📄
          RegisterForm.jsx
        </h3>
        <p className="accent">
          function RegisterForm() &#123;
          <br />
          <br />
          const<mark> &#123;</mark>
          <br />
          register,
          <br />
          handleSubmit,
          <br />
          formState: &#123; errors &#125;,
          <br />
          reset,
          <br />
          <mark> &#125;</mark> = <mark>useRegisterForm()</mark>;
          <br />
          <br />
          const submit = async (values) =&gt; &#123;
          <br />
          // await registerUser(values).unwrap();
          <br />
          console.log(values);
          <br />
          reset();
          <br />
          &#125;;
          <br />
          return (<br />
          &lt;&gt;
          <br />
          &lt;form&gt; className="form" onSubmit=&#123;<mark>handleSubmit</mark>
          (submit)&#123;&gt;
          <br />
        </p>
      </div>
    </div>
  );
}

export default ControllerDescription;
