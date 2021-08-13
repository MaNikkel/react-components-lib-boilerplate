import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
}

const ButtonComponent = ({ children, ...butonProps }: ButtonProps) => (
  <button {...butonProps}>
    {children}
  </button>
);

export default ButtonComponent;