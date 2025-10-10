import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./lightDarkSwitch.css";

const lightIcon = <FontAwesomeIcon icon={faSun} className="iconSwitch" style={{ color: "var(--color-text)" }}/>;
const darkIcon = <FontAwesomeIcon icon={faMoon} className="iconSwitch" style={{ color: "var(--color-text)" }}/>;

interface LightDarkSwitchProps {
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
}

function LightDarkSwitch({ toggleTheme, currentTheme }: LightDarkSwitchProps) {
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      toggleTheme(); // chama a função do App
      setAnimating(false);
    }, 400);
  };

  return (
    <div
      className={`lightDarkSwitch ${animating ? "rotating" : ""}`}
      onClick={handleClick}
    >
      {currentTheme === "light" ? lightIcon : darkIcon}
    </div>
  );
}

export default LightDarkSwitch;
