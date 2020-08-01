import React from 'react';

import { IconBaseProps } from 'react-icons/lib';
import { Container, Ink } from './styles';

interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  Icon?: React.ComponentType<IconBaseProps>;
  buttonText?: boolean;
}

const Button: React.FC<IPropsButton> = ({
  children,
  outline,
  Icon,
  buttonText,
  ...props
}) => (
  <Container
    outline={!!outline}
    buttonText={buttonText}
    type="button"
    {...props}
  >
    {Icon && <Icon />}
    {children}
    <Ink />
  </Container>
);

export default Button;
