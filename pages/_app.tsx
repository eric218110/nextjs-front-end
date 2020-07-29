/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from '../styles/theme';
import GlobalStyles from '../styles/Global';

interface IProps {
  Component: any;
  props: any;
}

function MyApp({ Component, props }: IProps): JSX.Element {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Component {...props} />
    </ThemeProvider>
  );
}

export default MyApp;
