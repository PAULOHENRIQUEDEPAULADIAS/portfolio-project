import Logo from "./logo/logo";
import Menu from "../menu/menu";
import CircleNodes from "./circleNode/circleNode";
import LightDarkSwitch from "./lightDarkSwitch/lightDarkSwitch";

import "./navbar.css";

interface NavBarProps {
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
}

function NavBar({ toggleTheme, currentTheme }: NavBarProps) {
  return (
    <nav className="NavBarBox">
      <div className="LeftIcons">
        <Logo />
        <CircleNodes />
        <Menu />
      </div>
      <div className="RightIcons">
        
        <LightDarkSwitch
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
        />
      </div>
    </nav>
  );
}

export default NavBar;
