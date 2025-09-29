import "./menuWrap.css";
import React from "react";

type MenuWrapProps = {
  className?: string;
  onClick?: () => void;
};

function MenuWrap({ className = "menuButton", onClick }: MenuWrapProps) {
  return (
    <div className="menuItemBox">
      <p className={className} onClick={onClick}>
        MENU
      </p>
    </div>
  );
}

export default MenuWrap;
