import { useState } from "react";
import MainNavBar from "./MainNavBar";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handlerVisibleMenu = () => {
    setIsOpen((v) => !v);
  };
  return (
    <div className="burgerMenuWrapper">
      {/* ---burger */}
      <div className="burgerMenuBg">
        <div className="burgerBtn" onClick={handlerVisibleMenu}>
          <span></span>
        </div>
        {isOpen && (
          <div className={`overlay ${isOpen ? "" : "notVisible"}`}></div>
        )}
        <div className={`burgerMenuBody ${isOpen ? "" : "notVisible"}`}>
          <div className="burgerMenu">
            <button type="button" onClick={handlerVisibleMenu}>
              <div className="burgerBtn">
                <span></span>
              </div>
            </button>

            <MainNavBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
