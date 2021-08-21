import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonComponent: React.FC = ({
  children,
  ...butonProps
}: ButtonProps) => (
  <button {...butonProps} type="button">
    {children} j
  </button>
);

export default ButtonComponent;
