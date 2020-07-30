import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../src/components/Header';

const LayoutHomePage = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>App</title>
        <link rel="icon" href="/icon/favicon.ico" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LayoutHomePage>
        <Header />
      </LayoutHomePage>
      {/* <img src="/images/image-1.png" alt="Vercel" className={styles.logo}/> */}
    </>
  );
}
