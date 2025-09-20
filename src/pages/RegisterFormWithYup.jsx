import LoginFormTest01 from "@/features/auth/login/ui/LoginFormTest01";
import YupSingUpForm from "@/features/auth/signup/ui/YupSingUpForm";
import RegisterFormWithControllerAndYup from "@/features/userRegistration/ui/RegisterFormWithControllerAndYup";

function RegisterFormWithYup() {
  return (
    <div className="registerFormWrapper">
      <h1>Register Form</h1>
      <RegisterFormWithControllerAndYup />
      <LoginFormTest01 />
      <YupSingUpForm />
    </div>
  );
}

export default RegisterFormWithYup;
