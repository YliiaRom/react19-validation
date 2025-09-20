import { useState } from "react";
import { useSignUp } from "../model/useSignUp";

function SignUpForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { signUp, isLoading, error } = useSignUp();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(`-----submit form`);
    console.log({ email, password, displayName });
    setErrorMessage("");
    try {
      await signUp({ email, password, displayName });
      onSuccess && onSuccess();
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error?.data?.message || "помилка при реєстрації");
    }
  };
  return (
    <>
      <form onSubmit={handleSignUp} className="signUpForm">
        <label>
          Name
          <input
            type="text"
            placeholder="xxx"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="пароль ..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Зареєструватися</button>
      </form>
      {isLoading && <p>Завантаження...</p>}
      {errorMessage !== "" && errorMessage}
      {(error || errorMessage) && (
        <div>{errorMessage || error?.data?.message || "Помилка"}</div>
      )}
    </>
  );
}

export default SignUpForm;
