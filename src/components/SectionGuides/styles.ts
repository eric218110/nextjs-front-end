import styled from 'styled-components';
import image from '../../../public/images/thousand-03.svg';
import ButtonStyled from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 173px;
`;

export const ContentLeft = styled.div`
  max-width: 50%;
  h1 {
    width: 100%;
    max-width: 418px;
    font-size: 36px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.title};
  }
  p {
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 17px;
    margin: 20px 0 33px 0;
    max-width: 450px;
  }
`;

export const Image = styled(image)`
  max-width: 50%;
  max-width: 50%;
  height: 100%;
`;

export const Button = styled(ButtonStyled)`
  width: 160px;
`;
