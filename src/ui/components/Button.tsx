import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
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
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-md duration-300",
        block && "w-full",
        {
          "bg-primary-main text-white hover:bg-primary-hover":
            color === "primary" && !disabled,
          "bg-secondary-main text-white hover:bg-secondary-hover":
            color === "secondary" && !disabled,
          "bg-gray-300 text-gray-500 cursor-not-allowed": disabled,
        },
        {
          "px-3 py-1.5 text-xs": size === "sm",
          "px-3 py-1.5 text-sm": size === "md",
          "px-4 py-2 text-base": size === "lg",
        },
      )}
      onClick={onClick}
      disabled={disabled} // Set the disabled attribute
    >
      {children ?? "Click me"}
    </button>
  );
}

export default Button;
