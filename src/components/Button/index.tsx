import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonComponent: React.FC = ({
  children,
  ...buttonProps
}: ButtonProps) => (
  <button {...buttonProps} type="button">
    {children} j
  </button>
);

export default ButtonComponent;
