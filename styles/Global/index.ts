import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        -webkit-appearance: inherit;
        -webkit-appearance:initial
    }

    ul, li {
        list-style: none;
    }
    
    button, input:focus { outline: none; }

`;
