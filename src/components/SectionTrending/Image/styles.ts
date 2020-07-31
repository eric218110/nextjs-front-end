import styled from 'styled-components';
import { shade } from 'polished';

interface IProps {
  src: string;
}

export const Container = styled.div<IProps>`
  position: relative;
  width: 266px;
  height: 446px;

  header {
    width: 100%;
    height: 230px;
    background: green;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top;
  }

  section {
    margin-top: 16px;
    strong {
      color: ${(props) => props.theme.colors.title};
      font-size: 19px;
      padding: 13px 0 6px 0;
      width: 219px;
      height: 2px;
    }

    p {
      color: ${(props) => props.theme.colors.subtitle};
      font-size: 15px;
      padding: 13px 0 23px 0px;
    }

    a {
      color: ${(props) => props.theme.colors.primary};
      &:hover {
        color: ${(props) => shade(0.2, props.theme.colors.primary)};
        cursor: pointer;
      }
    }
  }
`;

export const ShapeImage = styled.div``;
