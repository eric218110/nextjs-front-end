import styled, { css } from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';
import { darken } from 'polished';
import Tooltip from '../Tooltip';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  backgroundColor?: string;
}

export const Container = styled.div<IContainerProps>`
  background: ${(props) => props.theme.colors.text};
  width: 100%;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  align-items: center;
  color: ${(props) => darken(0.5, props.theme.colors.subtitle)};
  border: 0.8px solid ${(props) => darken(0.2, props.theme.colors.subtitle)};

  input {
    background: transparent;
    border: none;
    width: 100%;
    flex: 1;
    color: ${(props) => darken(0.5, props.theme.colors.subtitle)};
    font-size: 15px;
  }

  svg {
    margin-right: 16px;
  }

  ${(props) =>
    props.backgroundColor &&
    css`
      background: ${props.backgroundColor};
    `}

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${props.theme.colors.actions.error};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.primary};
      border-color: ${props.theme.colors.primary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${props.theme.colors.primary};
    `}
`;

export const Error = styled(Tooltip)`
  height: 15px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background-color: ${(props) => props.theme.colors.actions.error};
    color: ${(props) => props.theme.colors.text};
    &::before {
      border-color: ${(props) => props.theme.colors.actions.error} transparent;
    }
  }
`;

export const IconError = styled(FiAlertCircle).attrs((props) => {
  return {
    color: props.theme.colors.actions.error,
  };
})``;
