import styled, { css } from 'styled-components';
import { shade } from 'polished';
import ReactInk from 'react-ink';

interface IButtonProps {
  outline: boolean;
  buttonText: boolean;
}

export const Container = styled.button<IButtonProps>`
  width: 132px;
  height: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: 0 18px;
  color: ${(props) => props.theme.colors.text};
  font-size: 15px;
  font-weight: 500;
  transition: background-color 0.2s;
  position: relative;
  svg {
    color: ${(props) => props.theme.colors.text};
    font-size: 22px;
  }
  &:hover {
    background: ${(props) => shade(0.2, props.theme.colors.primary)};
  }
  & + button {
    margin-left: 18px;
  }

  ${(props) =>
    props.outline &&
    css`
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
      background-color: ${props.theme.colors.text};

      &:hover {
        background: ${shade(0.03, props.theme.colors.text)};
      }
      svg {
        color: ${props.theme.colors.primary};
      }
    `}

  ${(props) =>
    props.buttonText &&
    css`
      border: none;
      color: ${props.theme.colors.primary};
      background: transparent;

      &:hover {
        color: ${shade(0.2, props.theme.colors.primary)};
        background: transparent;
        svg {
          color: ${shade(0.2, props.theme.colors.primary)};
        }
      }

      svg {
        color: ${props.theme.colors.primary};
      }
    `}
`;

export const Ink = styled(ReactInk).attrs({
  duration: 900,
})``;
