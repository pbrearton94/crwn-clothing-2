import React from "react";
import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
/**
 *
 * Default, inverted and google sign in buttons
 *
 * @param {children} children are the different types of buttons
 * @returns
 */
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
