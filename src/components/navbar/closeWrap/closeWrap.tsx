import "./CloseWrap.css";
import React from "react";

type CloseProps = {
  className?: string;
  onClick?: () => void;
};

function CloseWrap({ className = "closeButton", onClick }: CloseProps) {
  return (
    <div className="closeItem" onClick={onClick}>
      <p className={className}>
        CLOSE
      </p>
    </div>
  );
}

export default CloseWrap;
