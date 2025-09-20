function ControllerFirstDescription() {
  return (
    <>
      <div className="controllerDescWrapper">
        <div>
          <h2>RadioGroup.jsx</h2>
          <h3>#1-📂shared --&gt; 📂ui --&gt; 📄 RadioGroup.jsx</h3>
          <p className="accent">
            function RadioGroup(&#123; <mark>label</mark>, <mark>name</mark>,
            <mark> options = []</mark>,<mark> value</mark>,{" "}
            <mark>onChange</mark>,<mark> error </mark>&#125;) &#123;
            <br />
            return (<br />
            &lt;&gt;
            <br />
            &lt;div&gt;
            <br />
            &lt;label&gt;
            <br />
            &#123;label && label&#125;
            <br />
            <br />
            &#123;options.<mark>map</mark>((item) =&gt; (<br />
            <br />
            &lt;label key=&#123;item.value&#125;&gt;
            <br />
            &#123;item.label && item.label&#125;
            <br />
            <br />
            &lt;<mark>input</mark>
            <br />
            <mark>type="radio"</mark>
            <br />
            name=&#123;<mark>name</mark>&#125;
            <br />
            <mark> checked</mark>=&#123;
            <mark>String(value) === String(item.value)</mark>&#125;
            <br />
            value=&#123;<mark>item.value</mark>&#125;
            <br />
            onChange=&#123;(e) =&gt;<mark> onChange</mark>(e.target.value)&#125;
            <br />
            /&gt;
            <br />
            &lt;/label&gt;
            <br />
            ))&#125;
            <br />
            &lt;/label&gt;
            <br />
            &#123;<mark>error</mark> && &lt;p
            className="error"&gt;&#123;error&#125;&lt;/p&gt;&#125;
            <br />
            &lt;/div&gt;
            <br />
          </p>
        </div>

        <div>
          <h2>Forma</h2>
          <h3>
            #2-📂features --&gt;📂user --&gt; 📂ui --&gt; 📄 RegisterForm.jsx
          </h3>
          <div>
            <p className="accent">
              import RadioGroup from "@/shared/ui/RadioGroup";
              <br />
              import &#123;<mark> useForm, Controller </mark>&#125; from
              "react-hook-form";
              <br />
              <br />
              <br />
              function RadioGroutForm() &#123;
              <br />
              const &#123;
              <br />
              handleSubmit,
              <br />
              formState: &#123; errors &#125;,
              <br />
              watch,
              <br />
              reset,
              <br />
              control,
              <br />
              &#125; = <mark>useForm</mark>(&#123;
              <br />
              <mark>defaultValues: &#123;</mark>
              <br />
              married: "",
              <br />
              news: null,
              <br />
              &#125;,
              <br />
              &#125;);
              <br />
              const onSubmitForm = (data) =&gt; &#123;
              <br />
              console.log(data);
              <br />
              reset();
              <br />
              &#125;;
              <br />
              let watchMarried = <mark>watch</mark>("married") || "";
              <br />
              let watchNews = watch("news") || "";
              <br />
              <br />
              return (&lt;&gt;
            </p>
            <div>
              <details>
                <summary>&lt;Controller</summary>
                <p className="accent">
                  {" "}
                  <mark> &lt;Controller</mark>
                  <br />
                  name="married"
                  <br />
                  control=&#123;control&#125;
                  <br />
                  rules=&#123;&#123; required: "моє повідомлення: треба обрати"
                  &#125; &#125;
                  <br />
                  <mark>render</mark>=&#123;(&#123; field &#125;) =&gt; (<br />
                  <mark> &lt;RadioGroup</mark>
                  <br />
                  label="Одружений(а)?"
                  <br />
                  name="married"
                  <br />
                  value=&#123;field.value&#125;
                  <br />
                  onChange=&#123;field.onChange&#125;
                  <br />
                  error=&#123;errors.married?.message&#125;
                  <br />
                  options=&#123;[
                  <br />
                  &#123; value: "yes", label: "так" &#125;,
                  <br />
                  &#123; value: "no", label: "ні" &#125;,
                  <br />
                  ]&#125;
                  <br />
                  /&gt;
                  <br />
                  )&#125;
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary>&lt;Comtroller</summary>
                <p className="accent">
                  <mark> &lt;Controller</mark>
                  <br />
                  <mark> name="news"</mark>
                  <br />
                  control=&#123;control&#125;
                  <br />
                  rules=&#123;&#123;
                  <br />
                  required: "моє повідомлення: Обов'язково обрати значення",
                  <br />
                  &#125;&#125;
                  <br />
                  <mark> render=&#123;(&#123; field &#125;)</mark> =&gt; (<br />
                  <mark> &lt;RadioGroup</mark>
                  <br />
                  label="Отримувати новини:"
                  <br />
                  <mark> name="news"</mark>
                  <br />
                  value=&#123;field.value&#125;
                  <br />
                  onChange=&#123;field.onChange&#125;
                  <br />
                  error=&#123;<mark>errors.news?.message</mark>&#125;
                  <br />
                  options=&#123;[
                  <br />
                  &#123; value: "раз в місяць", label: "раз в місяць" &#125;,
                  <br />
                  &#123; value: "так", label: "так" &#125;,
                  <br />
                  &#123; value: "ні", label: "ні" &#125;,
                  <br />
                  ]&#125;
                  <br />
                  /&gt;
                  <br />
                  )&#125;
                  <br />
                  /&gt;
                  <br />
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ControllerFirstDescription;
