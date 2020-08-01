import React from 'react';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
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
      <Button Icon={MdKeyboardArrowRight} outline>
        <a>Login</a>
      </Button>
    </Link>
    <Link href="/register">
      <Button Icon={FiPlus}>Register</Button>
    </Link>
  </Container>
);

export default Nav;
