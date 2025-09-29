import "./menu.css";
import React, { useState } from "react";
import MenuWrap from "../navbar/menuWrap/menuWrap";
import CloseWrap from "../navbar/closeWrap/closeWrap";
import { Link } from "react-router-dom";
import EmailIcon from "./emailIcon/emailIcon";
import GithubIcon from "./githubIcon/githubIcon";

function Menu() {
  const [open, setOpen] = useState(false);

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
          <EmailIcon/>
          <GithubIcon/>
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
          <Link to="/feedback">Feedback</Link>
          <span>
            Fique à vontade para me enviar um feedback (Poderá ser postado na
            tela inicial)
          </span>
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
