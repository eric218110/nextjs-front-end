import React from 'react';
import {
  Container,
  ShapeImage,
  ContentLeft,
  StarIcon,
  IconLeft,
  IconRight,
} from './styles';
import { Circle, Plus } from '../Shape';

const Testimonials: React.FC = () => (
  <Container>
    <ContentLeft>
      <h1>Testimonials</h1>
      <section>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </section>
      <p>
        “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac
        scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
      </p>
      <strong>Edward Newgate</strong>
      <h6>Founder Circle</h6>
    </ContentLeft>
    <ShapeImage>
      <Circle x="96%" y="-3px" />
      <img src="/images/photo.svg" alt="Edward Newgate, testimonials" />
      <footer>
        <IconLeft />
        <IconRight active />
      </footer>
      <Plus x="0px" y="95%" />
    </ShapeImage>
  </Container>
);

export default Testimonials;
