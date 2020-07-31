import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const Container = styled.div`
  margin: auto;
  margin: 262px 0 200px 0;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 36px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.title};
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};

    svg {
      margin-left: 5px;
    }
  }
`;

export const IconKeyboardArrowRight = styled(MdKeyboardArrowRight).attrs(
  (props) => {
    return {
      size: 25,
      color: props.theme.colors.primary,
    };
  },
)``;

export const ContentImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 56px;
`;
