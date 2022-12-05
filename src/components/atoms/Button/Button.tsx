import React from 'react';
import { ButtonWrapper } from './Button.style';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return <ButtonWrapper {...props}></ButtonWrapper>;
};

export default Button;
