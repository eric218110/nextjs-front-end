import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        -webkit-appearance: inherit;
        -webkit-appearance:initial;
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    hr {
      border: 1px solid ${(props) => props.theme.colors.subtitle};
    }
    
    button, input:focus { outline: none; }

`;
