"use client";

import * as React from "react";
import { ButtonProps } from "../types";

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-16 pt-2.5 pb-1.5 text-4xl font-medium text-pink-500 whitespace-nowrap bg-black rounded-3xl w-[250px] max-md:px-5 ${className}`}
      tabIndex={0}
    >
      {children}
    </button>
  );
};
