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
    color: #B8BECD;
    font-size: 16px;
    &:hover{
      color: ${darken(0.2, '#B8BECD')}
    };
    ${(props) => props.active && css`
       color: #202336;
       font-weight: 500;
        &:hover{
            color: ${darken(0.2, '#202336')}
        }
    `};
    &:last-child{
        margin-right: 34px;
    }
`;
