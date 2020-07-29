import React from 'react'
import { light } from '../styles/theme'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/Global'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={light}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp
