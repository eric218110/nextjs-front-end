import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Register from '../src/components/Register';

const LayoutRegisterPage = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;
`;

const GlobalContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
`;

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Rgister</title>
        <link rel="icon" href="/icon/favicon.ico" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalContainer>
        <LayoutRegisterPage>
          <Register />
        </LayoutRegisterPage>
      </GlobalContainer>
    </>
  );
}
