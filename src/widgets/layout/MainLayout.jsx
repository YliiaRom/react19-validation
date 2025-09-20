import { Outlet } from "react-router";
import Header from "../Header/Header";
import ToggleTheme from "../Header/swithers/ToggleTheme";
import MainNavBar from "../Header/MainNavBar";

function MainLayout() {
  return (
    <>
      <header>
        <Header />

        <ToggleTheme />
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <MainNavBar />
      </footer>
    </>
  );
}

export default MainLayout;
