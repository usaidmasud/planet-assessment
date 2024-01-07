import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  block?: boolean;
  onClick?: () => void;
  disabled?: boolean; // Add the disabled prop
}

function Button({
  children,
  color = "primary",
  size = "md",
  block,
  onClick,
  disabled = false, // Default value is false
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-md duration-300 focus:ring-2",
        block && "w-full",
        color === "primary" &&
          !disabled &&
          "bg-primary-main text-white hover:bg-primary-hover  focus:ring-primary-light",
        color === "secondary" &&
          !disabled &&
          "bg-secondary-main text-white hover:bg-secondary-hover focus:ring-secondary-light",
        disabled && "bg-gray-300 text-gray-500 cursor-not-allowed",
        size === "sm" && "px-3 py-1.5 text-xs",
        size === "md" && "px-3 py-1.5 text-sm",
        size === "lg" && "px-4 py-2 text-base",
      )}
      onClick={onClick}
      disabled={disabled} // Set the disabled attribute
    >
      {children ?? "Click me"}
    </button>
  );
}

export default Button;
