import React, { ReactNode } from "react";

interface indexProps {
  children: ReactNode;
}

function Button({ children }: indexProps) {
  return (
    <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 duration-300">
      {children ?? "Click me"}
    </button>
  );
}

export default Button;
