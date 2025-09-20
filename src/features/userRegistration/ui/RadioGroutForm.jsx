import RadioGroup from "@/shared/ui/RadioGroup";
import { useForm, Controller } from "react-hook-form";

function RadioGroutForm() {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    control,
  } = useForm({
    defaultValues: {
      married: "",
      news: null,
    },
  });

  const onSubmitForm = (data) => {
    console.log(data);
    reset();
  };
  let watchMarried = watch("married") || "";
  let watchNews = watch("news") || "";
  return (
    <>
      <p>Посилання на video Controller:</p>
      <a
        href="https://www.youtube.com/watch?v=N2UNk_UCVyA&t=6s"
        target="_blank"
      >
        <button className="btnLink">підключення Controller</button>
      </a>
      <p>
        данні про одруження (let x = watch("married"))- <mark>watch()</mark>
        -відслідковує :{watchMarried}
      </p>
      <p>данні про новини (watch("married")): {watchNews}</p>
      <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
        <p className="accent">
          onSubmit=&#123;handleSubmit(onSubmitForm)&#125;
        </p>
        <div className="formData">
          <p className="accent" style={{ color: "#fff" }}>
            &lt;input
            <br />
            type="radio"
            <br />
            name=&#123;<mark>name</mark>&#125;
            <br />
            checked=&#123;String(value) === String(item.value)&#125;
            <br />
            value=&#123;<mark>item.value</mark>&#125;
            <br />
            onChange=&#123;(e) =&gt;<mark> onChange</mark>(e.target.value)&#125;
            <br />
            /&gt;
            <br />
          </p>
        </div>
        {/* ---------controller married */}
        <Controller
          name="married"
          control={control}
          rules={{ required: "моє повідомлення: треба обрати" }}
          render={({ field }) => (
            <RadioGroup
              label="Одружений(а)?"
              name="married"
              value={field.value}
              onChange={field.onChange}
              error={errors.married?.message}
              options={[
                { value: "yes", label: "так" },
                { value: "no", label: "ні" },
              ]}
            />
          )}
        />
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
        {/* ----------controller news */}
        <Controller
          name="news"
          control={control}
          rules={{ required: "моє повідомлення: Обов'язково обрати значення" }}
          render={({ field }) => (
            <RadioGroup
              label="Отримувати новини:"
              name="news"
              value={field.value}
              onChange={field.onChange}
              error={errors.news?.message}
              options={[
                { value: "раз в місяць", label: "раз в місяць" },
                { value: "так", label: "так" },
                { value: "ні", label: "ні" },
              ]}
            />
          )}
        />
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
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default RadioGroutForm;
// label, name, (options = []), value, onChange, error;
