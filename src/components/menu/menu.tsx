import "./menu.css";
import  { useEffect, useState } from "react";
import MenuWrap from "../navbar/menuWrap/menuWrap";
import CloseWrap from "../navbar/closeWrap/closeWrap";
import { Link, useLocation } from "react-router-dom";
import EmailIcon from "./emailIcon/emailIcon";
import GithubIcon from "./githubIcon/githubIcon";

function Menu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {!open && <MenuWrap onClick={() => setOpen(true)} />}
      <MenuOverlay open={open} />
      {open && <CloseWrap onClick={() => setOpen(false)} />}
    </>
  );
}

type OverlayProps = {
  open: boolean;
};

export function MenuOverlay({ open }: OverlayProps) {
  return (
    <div className={`overlay ${open ? "active" : ""}`}>
      <ul className="overlayContent">
        <li className="social">
          <EmailIcon />
          <GithubIcon />
        </li>
        <li className="menuItem">
          <Link to="/">Home</Link>
          <span>Voltar a tela inicial</span>
        </li>
        <li className="menuItem">
          <Link to="/about">Sobre</Link>
          <span>Entenda um pouco melhor sobre mim e meus hobbies</span>
        </li>
        <li className="menuItem">
          <Link to="/work">Work</Link>
          <span>Conheça alguns dos meus projetos.</span>
        </li>
        <li className="menuItem">
          <Link to="/album">Album</Link>
          <span>Veja um pouco mais da minha vida</span>
        </li>
        <li className="menuItem">
          <Link to="/writing">Textos</Link>
          <span>Meus últimos textos em tecnologia e línguas</span>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
