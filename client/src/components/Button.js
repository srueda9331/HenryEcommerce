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
  const isSession = window.localStorage.getItem("user");

  return auth.currentUser || isSession ? (
    <button
      className={`btn ${checkbuttonStyle} ${checkbuttonSize}`}
      onClick={() => {
        auth.signOut();
        localStorage.clear();
      }}
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
