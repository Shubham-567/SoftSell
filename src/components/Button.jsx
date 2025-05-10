import React from "react";
import classNames from "classnames";

const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "px-6 py-3 font-semibold rounded-full transition duration-400 text-sm cursor-pointer hover:-translate-y-1";

  const variants = {
    primary: "bg-primary-600 text-white ",
    secondary: "bg-secondary-500 text-white",
    outline: "ring ring-primary-600 text-primary-600",
  };

  const combined = classNames(baseStyles, variants[variant], className);

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
};

export default Button;
