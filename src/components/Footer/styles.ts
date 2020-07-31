import styled from 'styled-components';
import logo from '../../../public/icon/logo.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 50px 0;

  p {
    width: 300px;
    padding: 26px 0 55px 0;
  }
  h6 {
    height: 28px;
    width: 391px;
  }

  h1 {
    margin-bottom: 26px;
    color: ${(props) => props.theme.colors.title};
    font-size: 19px;
    font-weight: bold;
  }

  h2 {
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 18px;
    font-weight: normal;
  }

  h2 + h2 {
    margin-top: 15px;
  }
`;

export const Logo = styled(logo)``;

export const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 25px;
    margin: 25px;
    &:hover {
      color: ${(props) => props.theme.colors.primary};
      cursor: pointer;
    }
  }
`;
