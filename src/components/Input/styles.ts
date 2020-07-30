import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: #FFF;
  width: 220px;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  align-items: center;
  color: #4A4C53;
  border: 0.8px solid #AFB0B9;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #fb8f1d;
      border-color: #fb8f1d;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #fb8f1d;
    `}
  input {
    background: transparent;
    border: none;
    width: 100%;
    flex: 1;
    color: #4A4C53;
    font-size: 15px;
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 15px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background-color: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
