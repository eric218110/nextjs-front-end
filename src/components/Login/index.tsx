import React, { useCallback } from 'react';

import { Form } from '@unform/web';
import { IoLogoGoogle } from 'react-icons/io';
import { FaFacebookF, FaUser, FaLock } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import Link from 'next/link';
import Button from '../Button';
import Input from '../Input';
import {
  Container,
  Image,
  ContentLogin,
  InputGroup,
  LoginWithFacebook,
  LoginWithGoogle,
  IconHome,
  IconSignUp,
} from './styles';

const Login: React.FC = () => {
  const handleFormSubmit = useCallback(() => {
    const { log } = console;
    log('Login');
  }, []);
  return (
    <Container>
      <Image urlImage="/images/background-1.svg" />
      <ContentLogin>
        <header>
          <Link href="/">
            <Button Icon={IconHome}>Home</Button>
          </Link>
          <Link href="/register">
            <Button Icon={IconSignUp} buttonText>
              Registration
            </Button>
          </Link>
        </header>
        <Form onSubmit={handleFormSubmit}>
          <h1>Welcome</h1>
          <h3>Please login to your account </h3>
          <InputGroup>
            <Input
              Icon={FaUser}
              type="text"
              placeholder="Username or Email"
              name="login-user"
            />
          </InputGroup>
          <InputGroup>
            <Input
              Icon={FaLock}
              type="password"
              placeholder="Password"
              name="password-user"
            />
          </InputGroup>
          <footer>
            <Button buttonText>Forgot Password</Button>
            <Button Icon={MdSend} type="submit">
              Send
            </Button>
          </footer>
        </Form>
        <LoginWithFacebook Icon={FaFacebookF}>
          Login with Facebook
        </LoginWithFacebook>
        <LoginWithGoogle Icon={IoLogoGoogle}>Login with Google</LoginWithGoogle>
        <p>Terms and conditions & Privacy Policy</p>
      </ContentLogin>
    </Container>
  );
};

export default Login;
