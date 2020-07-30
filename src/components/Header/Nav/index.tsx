import React from 'react';
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
    <Button outline>Login</Button>
    <Button>Register</Button>
  </Container>
);

export default Nav;
