import clsx from "clsx";
import React, { ReactNode } from "react";

interface indexProps {
  children: ReactNode;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

function Button({ children, color = "primary", size = "md" }: indexProps) {
  const buttonClasses = clsx(
    "rounded-md duration-300",
    {
      "bg-primary-main text-white hover:bg-primary-hover": color === "primary",
      "bg-secondary-main text-white hover:bg-secondary-hover":
        color === "secondary",
    },
    {
      "px-3 py-1.5 text-xs": size === "sm",
      "px-3 py-1.5 text-sm": size === "md",
      "px-4 py-2 text-base": size === "lg",
    },
  );
  return <button className={buttonClasses}>{children ?? "Click me"}</button>;
}

export default Button;
