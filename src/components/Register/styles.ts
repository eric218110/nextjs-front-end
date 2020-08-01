import styled from 'styled-components';
import { MdHome } from 'react-icons/md';
import { FiArrowLeft } from 'react-icons/fi';
import { shade } from 'polished';
import ButtonStyled from '../Button';

interface IPropsImage {
  urlImage: string;
}

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Image = styled.div<IPropsImage>`
  flex: 1;
  background: url(${(props) => props.urlImage}) no-repeat center;
  background-size: cover;
`;

export const IconHome = styled(MdHome).attrs(() => {
  return {
    size: '20',
  };
})``;

export const IconBack = styled(FiArrowLeft).attrs(() => {
  return {
    size: '20',
  };
})``;

export const ContentRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 20px 80px;

  header {
    display: flex;
    width: 100%;
    button {
      border-radius: 25px;
      width: auto;
      svg {
        margin-right: 15px;
      }
    }
  }

  form {
    border-radius: 20px;
    width: 100%;
    height: 100%;

    h1 {
      margin-top: 40px;
      color: ${(props) => props.theme.colors.title};
      font-size: 42px;
      font-weight: bold;
    }

    h3 {
      color: ${(props) => props.theme.colors.subtitle};
      font-size: 16px;
      font-weight: normal;
      margin: 10px 0 20px 0;
    }

    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;

      button {
        border-radius: 25px;
        width: auto;
        color: ${(props) => props.theme.colors.subtitle};
        &:hover {
          color: ${(props) => shade(0.2, props.theme.colors.subtitle)};
        }
        svg {
          margin-right: 15px;
        }
      }

      button + button {
        color: ${(props) => props.theme.colors.text};
        &:hover {
          color: ${(props) => props.theme.colors.text};
        }
      }
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      padding: 20px;
    }
  }

  p {
    display: flex;
    color: ${(props) => props.theme.colors.subtitle};
    margin: 20px 0;
    &:hover {
      color: ${(props) => shade(0.2, props.theme.colors.subtitle)};
      cursor: pointer;
    }
  }
`;

export const InputGroup = styled.div`
  padding: 5px 0;
`;

export const RegisterWithFacebook = styled(ButtonStyled)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 45px;
  margin: 5px;
  background-color: ${(props) => shade(0.07, props.theme.colors.background)};
  color: ${(props) => props.theme.colors.subtitle};
  border-radius: 20px;
  border-color: transparent;

  svg {
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    background-color: ${(props) => shade(0.25, props.theme.colors.background)};
    color: ${(props) => props.theme.colors.background};
  }
`;

export const RegisterWithGoogle = styled(ButtonStyled)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 45px;
  margin: 5px;
  background-color: ${(props) => shade(0.07, props.theme.colors.background)};
  color: ${(props) => props.theme.colors.subtitle};
  border-color: transparent;

  svg {
    color: ${(props) => props.theme.colors.secundary};
  }

  &:hover {
    background-color: ${(props) => shade(0.25, props.theme.colors.background)};
    color: ${(props) => props.theme.colors.background};
  }
`;
