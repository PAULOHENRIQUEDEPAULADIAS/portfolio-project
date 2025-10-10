import "./logo.css";

import { faWolfPackBattalion } from "@fortawesome/free-brands-svg-icons";
import { faBugs, faCat, faCow, faCrow, faDog, faDove, faDragon, faFish, faHippo, faHorse, faKiwiBird, faOtter, faSpider } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import  { useState, useEffect } from "react";

const icons = [
  faWolfPackBattalion, faDog, faHippo, faOtter, faFish, faDragon, faKiwiBird, faSpider, faHorse, faDove, faCat, faCrow, faBugs, faCow
];

function Logo() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % icons.length);
    }, 15000 );

    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/" className="logoIconBox">
      {icons.map((icon, index) => (
        <FontAwesomeIcon
          key={index}
          icon={icon}
          className={`icon ${index === current ? "active" : ""}`}
          style={{ color: "var(--color-text)" }}
        />
      ))}
    </Link>
  );
}

export default Logo;
