import styled from 'styled-components';
import image from '../../../../public/images/thousand-01.svg';

export const Container = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
`;

export const ContentHolidayFinder = styled.div`
  flex: 1;

  h1 {
    font-size: 64px;
    font-weight: normal;
    max-width: 361px;
    margin-bottom: 74px;
  }

  h6 {
    font-weight: 500;
    font-size: 22px;
  }

  hr {
    margin: 21px 0 48px 0;
    border: 2px solid ${(props) => props.theme.colors.title};
    width: 32px;
    border-radius: 4px;
  }

  button {
    margin-top: 16px;
  }
`;

export const Image = styled(image)`
  max-width: 90%;
  max-height: 90%;
`;

export const InputGroup = styled.div`
  display: flex;
  margin-bottom: 35px;
  div {
    & + div {
      margin-left: 30px;
    }
  }
`;
