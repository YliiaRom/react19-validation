import bgImg from "@/assets/img/logo1.png";
import MainNavBar from "./MainNavBar";
import UserInfo from "./UserInfo";
import BurgerMenu from "./BurgerMenu";
function Header() {
  return (
    <div>
      <div className="headerRow">
        <div
          className="headerLogo"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>

        <div className="mainMenuVisibleWrap">
          <MainNavBar />
        </div>
      </div>
      <BurgerMenu />

      <UserInfo />
    </div>
  );
}

export default Header;
