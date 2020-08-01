import React from 'react';
import Link from 'next/link';
import { Container, ItemList } from './styles';
import Button from '../../Button';

const Nav: React.FC = () => (
  <Container>
    <ul>
      <ItemList active>Home</ItemList>
      <ItemList>Destinations</ItemList>
      <ItemList>About</ItemList>
      <ItemList>Partner</ItemList>
    </ul>
    <Link href="/login">
      <Button outline>
        <a>Login</a>
      </Button>
    </Link>
    <Button>Register</Button>
  </Container>
);

export default Nav;
