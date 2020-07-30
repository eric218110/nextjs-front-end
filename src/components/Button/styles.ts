import styled, { css } from 'styled-components';
import { shade } from 'polished';
import ReactInk from 'react-ink';

interface IButtonProps {
  outline: boolean;
}

export const Container = styled.button<IButtonProps>`
  width: 132px;
  height: 44px;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: 0 16px;
  color: ${(props) => props.theme.colors.text};
  font-size: 15px;
  font-weight: 500;
  transition: background-color 0.2s;
  position: relative;
  &:hover {
    background: ${(props) => shade(0.2, props.theme.colors.primary)};
  }
  ${(props) =>
    props.outline &&
    css`
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
      background-color: ${props.theme.colors.text};

      &:hover {
        background: ${shade(0.2, props.theme.colors.text)};
      }
    `}
  & + button {
    margin-left: 18px;
  }
`;

export const Ink = styled(ReactInk).attrs({
  duration: 900,
})``;
