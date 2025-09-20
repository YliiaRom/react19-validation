// import LoginForm from "@/features/auth/login/ui/LoginForm";
// import SignUpForm from "@/features/auth/signup/ui/SignUpForm";
// import { useState } from "react";

// function LoginPage() {
//   const [showSignUp, setShowSignUp] = useState(false);

//   return (
//     <div className="loginPage">
//       {showSignUp ? "Ви вже маєту акаунт/" : " У Вас Немає акаунта/ "}
//       {showSignUp ? " Вхід" : "треба Реєстрація"}
//       {showSignUp ? (
//         <LoginForm onSuccess={() => {}} />
//       ) : (
//         <SignUpForm onSuccess={() => setShowSignUp(false)} />
//       )}
//       <button onClick={() => setShowSignUp((v) => !v)}>
//         {showSignUp ? "Увійти" : " Після реєстрації увійдіть"}
//       </button>
//     </div>
//   );
// }

// export default LoginPage;
import LoginForm from "@/features/auth/login/ui/LoginForm";
import LoginFormTest01 from "@/features/auth/login/ui/LoginFormTest01";
// import LoginFormTest01 from "@/features/auth/login/ui/LoginFormTest01";
import SignUpForm from "@/features/auth/signup/ui/SignUpForm";
import YupSingUpForm from "@/features/auth/signup/ui/YupSingUpForm";
import { useState } from "react";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="loginPage">
      <h2>{isLogin ? "Вхід до акаунта" : "Реєстрація нового акаунта"}</h2>

      {isLogin ? (
        <div>
          <LoginForm onSuccess={() => {}} />
          <LoginFormTest01 />
        </div>
      ) : (
        <div>
          <SignUpForm onSuccess={() => setIsLogin(true)} />
          <YupSingUpForm onSuccess={() => setIsLogin(true)} />
        </div>
      )}

      <button onClick={() => setIsLogin((v) => !v)}>
        {isLogin ? "Немає акаунта? Зареєструватись" : "Вже є акаунт? Увійти"}
      </button>
    </div>
  );
}

export default LoginPage;
