import styled from 'styled-components';
import image from '../../../public/images/thousand-02.svg';

export const Container = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled(image)`
  max-width: 50%;
  height: 100%;
`;

export const ContentRight = styled.div`
  h1 {
    font-weight: bold;
    font-size: 36px;
    color: ${(props) => props.theme.colors.title};
    max-width: 481px;
  }

  p {
    color: ${(props) => props.theme.colors.subtitle};
    margin: 20px 0 33px 0;
    max-height: 120px;
    max-width: 450px;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 30px;
    max-width: 450px;
  }
`;
