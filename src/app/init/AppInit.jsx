import { useRefreshMutation } from "@/features/auth/api/authApi";
import { logout, setUser } from "@/features/auth/api/authSlice";
import { useLogout } from "@/features/auth/logout/model/useLogout";
import { auth } from "@/shared/api/config/firebase-config";
// import { auth } from "@/shared/api/config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function AppInit() {
  const dispatch = useDispatch();
  const [refresh] = useRefreshMutation();
  const { logout: logoutFn } = useLogout();

  const themeNow = useSelector((state) => state.theme.theme);
  useEffect(() => {
    const changeTheme = () => {
      const body = document.querySelector("body");
      body.classList.remove("light", "dark");
      body.classList.add(themeNow);
    };
    changeTheme();
    window.addEventListener("storage", changeTheme);
    return () => window.removeEventListener("storage", changeTheme);
  }, [themeNow]);
  useEffect(() => {
    try {
      const dataLS = window.localStorage.getItem("theme");

      if (!dataLS) window.localStorage.setItem("theme", themeNow);
      if (dataLS !== themeNow) window.localStorage.setItem("theme", themeNow);
    } catch (error) {
      console.log(error);
    }
  }, [themeNow]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const response = await refresh().unwrap();

          if (response) dispatch(setUser(response));
        } catch (error) {
          console.log(error.message);
          dispatch(logout());
        }
      } else {
        dispatch(logout());
      }
    });
    return () => unsubscribe();
  }, [dispatch, refresh]);
}

export default AppInit;
