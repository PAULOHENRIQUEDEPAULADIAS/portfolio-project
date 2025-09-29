import React, { useState } from "react";
import "./lightDarkSwitch.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const lightIcon = <FontAwesomeIcon icon={faSun} className="iconSwitch" />;
const darkIcon = <FontAwesomeIcon icon={faMoon} className="iconSwitch" />;

function LightDarkSwitch() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setMode(mode === "light" ? "dark" : "light");
      setAnimating(false);
    }, 400);
  };

  return (
    <div
      className={`lightDarkSwitch ${animating ? "rotating" : ""}`}
      onClick={handleClick}
    >
      {mode === "light" ? lightIcon : darkIcon}
    </div>
  );
}

export default LightDarkSwitch;
