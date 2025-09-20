import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth/api/authSlice";
import { useLogout } from "@/features/auth/logout/model/useLogout";
import { frontRoutes } from "@/shared/api/config/routes/frontRoutes";
import { GoogleAuthProvider } from "firebase/auth";

import { Link, useNavigate } from "react-router";
import { BsPersonWorkspace } from "react-icons/bs";

function UserInfo() {
  const user = useSelector(selectAuthUser);
  const dataUser = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  const { logout } = useLogout();
  const loading = useSelector((state) => state.auth.loading);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({ prompt: "select_account" });

  const handlerLogout = async () => {
    await logout();
    navigate(frontRoutes.pages.LoginPage.navigationPath);
  };

  if (loading) return <p>Loading...</p>;
  if (!user) {
    return (
      <Link
        to={frontRoutes.pages.LoginPage.navigationPath}
        className="linkLogIn"
      >
        Увійти
      </Link>
    );
  }

  return (
    <div className="userInfoWrapper">
      {}
      {user.photoURL ? (
        <img src={user.photoURL} alt={user.email} />
      ) : (
        <BsPersonWorkspace size={32} />
      )}
      <p>{user.displayName && user.displayName}</p>
      <p>
        <span>{user.email}</span> -<span>{user.role ? user.role : "user"}</span>
      </p>
      <button onClick={handlerLogout}>logOut/Вийти</button>
    </div>
  );
}

export default UserInfo;
