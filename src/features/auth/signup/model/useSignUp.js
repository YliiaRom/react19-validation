import { useSignUpMutation } from "../../api/authApi";

export const useSignUp = () => {
  const [signUp, { isLoading, error }] = useSignUpMutation();

  const handleSignUp = async (data) => {
    try {
      await signUp(data).unwrap();
    } catch (error) {
      console.log(error.message);
    }
  };
  return { signUp: handleSignUp, isLoading, error };
};
