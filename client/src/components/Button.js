import React from "react";
import "./Button.css";
import { auth } from "../firebase";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkbuttonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkbuttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return auth.currentUser ? (
    <button
      className={`btn ${checkbuttonStyle} ${checkbuttonSize}`}
      onClick={() => auth.signOut()}
    >
      Sign Out
    </button>
  ) : (
    <button
      className={`btn ${checkbuttonStyle} ${checkbuttonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
