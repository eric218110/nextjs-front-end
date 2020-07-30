import styled from 'styled-components';

export const Container = styled.div`
  width: 261px;
  height: 337px;
  position: relative;

  img {
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  footer {
    position: absolute;
    background: ${(props) => props.theme.colors.background};
    border-top-right-radius: 10px;
    bottom: 0;
    height: 56px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 10px;

    strong {
      color: ${(props) => props.theme.colors.title};
      font-size: 17px;
      padding-bottom: 6px;
    }

    p {
      color: ${(props) => props.theme.colors.subtitle};
      font-size: 15px;
    }
  }
`;

export const ShapeImage = styled.div``;
