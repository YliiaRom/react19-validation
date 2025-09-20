import { useState } from "react";
import { useLogin } from "../model/useLogin";
import { useNavigate } from "react-router";
import { frontRoutes } from "@/shared/api/config/routes/frontRoutes";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login, googleLogin, isLoading, error } = useLogin();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      await login({ email, password });
      navigate(frontRoutes.pages.HomePage.navigationPath);
    } catch (error) {
      setErrorMessage(error?.message || "помилка входу");
      console.log(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      navigate(frontRoutes.pages.HomePage.navigationPath);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error?.message || "Помилка Google аутентифікації");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="loginForm">
        <p className="accent">email: 444444@gmail.com</p>
        <p className="accent">password: 444444</p>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
        <button onClick={handleGoogle}>Google</button>
      </form>
      {error && <p>{error?.data?.message || "Помилка входу"}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default LoginForm;
