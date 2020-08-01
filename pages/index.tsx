import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../src/components/Header';
import SectionExplorer from '../src/components/SectionExplorer';
import SectionFeatured from '../src/components/SectionFeatured';
import SectionGuides from '../src/components/SectionGuides';
import Testimonials from '../src/components/Testimonials';
import SectionTrending from '../src/components/SectionTrending';
import Footer from '../src/components/Footer';

const LayoutHomePage = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const GlobalContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  padding-top: 30px;
`;

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Find Travel</title>
        <link rel="icon" href="/icon/favicon.ico" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalContainer>
        <LayoutHomePage>
          <Header />
          <SectionExplorer />
          <SectionFeatured />
          <SectionGuides />
          <Testimonials />
          <SectionTrending />
          <Footer />
        </LayoutHomePage>
      </GlobalContainer>
    </>
  );
}
