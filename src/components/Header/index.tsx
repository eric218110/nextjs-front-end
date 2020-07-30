import React from 'react';
import { Container, Logo, ContentTop } from './styles';
import Nav from './Nav';
import Body from './Body';

const Header: React.FC = () => (
  <Container>
    <ContentTop>
      <Logo />
      <Nav />
    </ContentTop>
    <Body />
  </Container>
);

export default Header;
