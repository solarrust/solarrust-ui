import React from "react";
import { colors } from "@solarrust-ui/tokens";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  [key: string]: any;
}

export const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  const bgColor =
    variant === "primary"
      ? colors.primary.DEFAULT
      : colors.accent
      ? colors.accent.DEFAULT
      : colors.secondary.DEFAULT;

  return (
    <button
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      {children}
    </button>
  );
};
