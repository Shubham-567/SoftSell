import React from "react";
import classNames from "classnames";

const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  ariaLabel = "",
}) => {
  const baseStyles =
    "px-6 py-3 font-semibold rounded-full transition duration-400 text-sm cursor-pointer hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500";

  const variants = {
    primary: "bg-primary-500 text-white ",
    secondary: "bg-secondary-500 text-white",
    outline: "ring ring-primary-500 text-primary-500",
  };

  const combined = classNames(baseStyles, variants[variant], className);

  return (
    <button
      type={type}
      onClick={onClick}
      className={combined}
      aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
