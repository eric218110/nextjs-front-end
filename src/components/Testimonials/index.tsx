import React from 'react';
import { Container, ShapeImage } from './styles';

const Testimonials: React.FC = () => (
  <Container>
    <h1>Testimonials</h1>
    <p>
      "Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac
      scelerique eu, facilisis quis purus. Morbi blandit sit amaet turpis nex"
    </p>
    <strong>Edward Newgate</strong>
    <h6>Founder Circle</h6>
    <ShapeImage>
      <img src="/images/image-1.png" alt="Edward Newgate, testimonials" />
    </ShapeImage>
  </Container>
);

export default Testimonials;
