import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface IListItemProps {
  active?: boolean;
}

export const Container = styled.nav`
  height: 60px;
  width: 663px;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    width: 330px;
    justify-content: space-between;
  }
`;

export const ItemList = styled.li<IListItemProps>`
  cursor: pointer;
  color: ${(props) => props.theme.colors.subtitle};
  font-size: 16px;
  &:hover {
    color: ${(props) => darken(0.2, props.theme.colors.subtitle)};
  }
  ${(props) =>
    props.active &&
    css`
      color: ${props.theme.colors.title};
      font-weight: 500;
      &:hover {
        color: ${darken(0.2, props.theme.colors.title)};
      }
    `};
  &:last-child {
    margin-right: 34px;
  }
`;
