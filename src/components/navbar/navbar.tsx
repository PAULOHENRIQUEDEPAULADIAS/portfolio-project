import LanguageSwitch from "./languageSwitch/langageSwitch";
import Logo from "./logo/logo";
import Menu from "../menu/menu";
import CircleNodes from "./circleNode/circleNode";
import LightDarkSwitch from "./lightDarkSwitch/lightDarkSwitch";

import "./navbar.css";

function NavBar() {
  return (
    <>
      <nav className="NavBarBox">
        <div className="LeftIcons">
          <Logo />
          <CircleNodes />
          <Menu />
        </div>
        <div className="RightIcons">
          <LanguageSwitch />
          <LightDarkSwitch />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
