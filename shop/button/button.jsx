"use client";
// components/Button.js
import PropTypes from "prop-types";

const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick = () => {},
  children,
}) => {
  // Base styles for the button
  const baseStyle =
    "px-4 py-2  rounded focus:outline-none transition-colors duration-300";

  // Variant styles
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline:
      "bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100",
  };

  // Size styles
  const sizeStyles = {
    small: "text-sm py-1 px-2",
    medium: "text-base py-2 px-4",
    large: "text-lg py-3 px-6",
  };

  // Combine base styles, variant styles, size styles, and disabled state
  const buttonStyles = `${baseStyle} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <div className="w-full h-96 grid place-items-center">
      <button className={buttonStyles} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

// Define PropTypes to enforce component usage
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
