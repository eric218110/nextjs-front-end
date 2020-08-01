import React, { useCallback } from 'react';

import { MdCopyright } from 'react-icons/md';
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiGithub,
} from 'react-icons/fi';
import { Container, Logo, ContentFooter } from './styles';

const Footer: React.FC = () => {
  const getYear = useCallback(() => {
    const now = new Date();
    return now.getUTCFullYear();
  }, []);
  return (
    <>
      <hr />
      <Container>
        <section>
          <Logo />
          <p>
            Plan and book perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <h6>
            <MdCopyright />
            {`${getYear()} Thousand Sunny. All rights reserved`}
          </h6>
          <h6>
            created by
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href="https://github.com/eric218110" target="_blank">
              {' '}
              Eric Silva
            </a>
          </h6>
        </section>
        <section>
          <h1>Destinations</h1>
          <h2>Africa</h2>
          <h2>Antartica</h2>
          <h2>Asia</h2>
          <h2>Europa</h2>
          <h2>America</h2>
        </section>
        <section>
          <h1>Shop</h1>
          <h2>Destinstion guides</h2>
          <h2>Pictorial & Gifts</h2>
          <h2>Special Offers</h2>
          <h2>Delivery Times</h2>
          <h2>FAQs</h2>
        </section>
        <section>
          <h1>Interests</h1>
          <h2>Adventure Travel</h2>
          <h2>Art and culture</h2>
          <h2>Wildlife and Nature</h2>
          <h2>Family Holidays</h2>
          <h2>Food And Drink</h2>
        </section>
      </Container>
      <ContentFooter>
        <FiTwitter />
        <FiFacebook />
        <FiInstagram />
        <FiLinkedin />
        <FiYoutube />
        <FiGithub />
      </ContentFooter>
    </>
  );
};

export default Footer;
