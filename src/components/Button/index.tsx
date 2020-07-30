import React from 'react';

import { Container, Ink } from './styles';

interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
}

const Button: React.FC<IPropsButton> = ({ children, outline, ...props }) => (
  <Container outline={!!outline} type="button" {...props}>
    {children}
    <Ink />
  </Container>
);

export default Button;
