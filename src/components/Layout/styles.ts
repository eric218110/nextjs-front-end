import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors.primary};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;
