import Input from "@/shared/ui/Input";
import { useRegisterForm } from "../model/useRegisterForm";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useRegisterForm();

  const submit = async (values) => {
    // await registerUser(values).unwrap();
    console.log(values);
    reset();
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h2>&lt;form onSubmit=&#123;handleSubmit(submit)&#125;&gt;</h2>
        <p className="accent">
          <mark> &lt;Input </mark>
          <br />
          label="Нікнейм"
          <br />
          placeholder="yuliia_1"
          <br />
          error=&#123;errors.nickName?.message&#125;
          <br />
          <mark> &#123;...register("nickName")&#125;</mark>
          <br />
        </p>
        <Input
          label="Нікнейм"
          placeholder="yuliia_1"
          error={errors.nickName?.message}
          {...register("nickName")}
        />
        <p className="accent">
          &lt;Input
          <br />
          <mark> label</mark>="Email:"
          <br />
          placeholder="yuliia@gmail.com"
          <br />
          <mark>error</mark>=&#123;errors.email?.message&#125;
          <br />
          <mark> &#123;...register("email")&#125;</mark>
          <br />
          /&gt;
        </p>
        <Input
          label="Email:"
          placeholder="yuliia@gmail.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="age:"
          placeholder="40"
          error={errors.age?.message}
          {...register("age")}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default RegisterForm;
