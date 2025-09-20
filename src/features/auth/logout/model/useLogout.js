import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../api/authApi.js";
import { logout as logoutAction } from "../../api/authSlice.js";

export const useLogout = () => {
  const dispatch = useDispatch();
  const [logoutApi] = useLogoutMutation();
  const logout = async () => {
    await logoutApi().unwrap();
    dispatch(logoutAction());
  };
  return { logout };
};
