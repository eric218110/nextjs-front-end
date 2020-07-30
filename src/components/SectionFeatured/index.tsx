import React from 'react';
import {
  Container,
  Header,
  IconKeyboardArrowRight,
  ContentImages,
} from './styles';
import { Circle } from '../Shape';
import Image from './Image';

const SectionFeatured: React.FC = () => (
  <Container>
    <Circle x="80%" y="265%" />
    <Header>
      <h1>Featured destinations</h1>
      <a href="viewAll">
        view all
        <IconKeyboardArrowRight />
      </a>
    </Header>

    <ContentImages>
      <Image
        imageURL="/images/image-1.svg"
        title="Raja Ampat"
        subtitle="Indonesia"
      />
      <Image
        imageURL="/images/image-2.svg"
        title="Fanjingshan"
        subtitle="China"
      />
      <Image imageURL="/images/image-3.svg" title="Vevey" subtitle="Vevey" />
      <Image
        imageURL="/images/image-4.svg"
        title="Skadar"
        subtitle="Montenegro"
      />
    </ContentImages>
  </Container>
);

export default SectionFeatured;
