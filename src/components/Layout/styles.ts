import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text}
`;