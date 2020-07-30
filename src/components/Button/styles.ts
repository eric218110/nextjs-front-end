import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IButtonProps {
  outline: boolean;
}

const Container = styled.button<IButtonProps>`
  width: 132px;
  height: 44px;
  border-radius: 8px;
  cursor: pointer;
  background: #fb8f1d;
  border: 1px solid #fb8f1d;
  padding: 0 16px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  transition: background-color 0.2s;
  position: relative;
  &:hover {
    background: ${shade(0.2, '#FB8F1D')};
  }
  ${(props) =>
    props.outline &&
    css`
      border-color: #fb8f1d;
      color: #fb8f1d;
      background-color: #fff;

      &:hover {
        background: ${shade(0.2, '#FFF')};
      }
    `}
  & + button {
    margin-left: 18px;
  }
`;

export default Container;
