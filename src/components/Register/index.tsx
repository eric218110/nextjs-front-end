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
  ContentRegister,
  InputGroup,
  RegisterWithFacebook,
  RegisterWithGoogle,
  IconHome,
  IconBack,
} from './styles';

const Register: React.FC = () => {
  const handleFormSubmit = useCallback(() => {
    const { log } = console;
    log('Register');
  }, []);
  return (
    <Container>
      <Image urlImage="/images/background-1.svg" />
      <ContentRegister>
        <header>
          <Link href="/login">
            <Button Icon={IconBack} buttonText>
              Back
            </Button>
          </Link>
          <Link href="/">
            <Button Icon={IconHome}>Home</Button>
          </Link>
        </header>
        <Form onSubmit={handleFormSubmit}>
          <h1>Welcome</h1>
          <h3>Create your account, it's fast and free</h3>
          <InputGroup>
            <Input
              Icon={FaUser}
              type="text"
              placeholder="Username or Email"
              name="register-name"
            />
          </InputGroup>
          <InputGroup>
            <Input
              Icon={FaUser}
              type="text"
              placeholder="Username or Email"
              name="register-email"
            />
          </InputGroup>
          <InputGroup>
            <Input
              Icon={FaLock}
              type="password"
              placeholder="Password"
              name="register-password"
            />
          </InputGroup>
          <InputGroup>
            <Input
              Icon={FaLock}
              type="password"
              placeholder="Confirm Password"
              name="register-password"
            />
          </InputGroup>
          <section>
            <Link href="/login">
              <Button buttonText>Already have account?</Button>
            </Link>
            <Button Icon={MdSend} type="submit">
              Send
            </Button>
          </section>
        </Form>
        <footer>
          <RegisterWithFacebook Icon={FaFacebookF}>
            Register with Facebook
          </RegisterWithFacebook>
          <RegisterWithGoogle Icon={IoLogoGoogle}>
            Register with Google
          </RegisterWithGoogle>
        </footer>
        <p>Terms and conditions & Privacy Policy</p>
      </ContentRegister>
    </Container>
  );
};

export default Register;
