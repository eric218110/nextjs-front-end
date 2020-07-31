import React from 'react';
import {
  Container,
  Header,
  IconKeyboardArrowRight,
  ContentImages,
} from './styles';
import { Circle, Plus } from '../Shape';
import Image from './Image';

const SectionFeatured: React.FC = () => (
  <Container>
    <Circle x="70%" y="10%" />
    <Plus x="45%" y="-20%" />
    <Header>
      <h1>Trending stories</h1>
      <a href="viewAll">
        view all
        <IconKeyboardArrowRight />
      </a>
    </Header>

    <ContentImages>
      <Image
        imageURL="/images/image-5.svg"
        title="The many benefits of talking a healing holiday"
        subtitle="'Helaing holidays' are on the rise to help maximise your health and happines..."
      />
      <Image
        imageURL="/images/image-6.svg"
        title="The best Kyoto restaurant to try Japanese food"
        subtitle="From tofu to teahouses, here´s our guide to Kyoto´s best restaurants to visit ..."
      />
      <Image
        imageURL="/images/image-7.svg"
        title="Skip Chichen Itza and head to this remote Yucatan"
        subtitle="It´s remote and challenging to get, but braving the jungle and exploring these ruins without the ..."
      />
      <Image
        imageURL="/images/image-8.svg"
        title="Surf´s up at these beginner spots around the world"
        subtitle="If learning to surf has in on your todo list for a while, the good news, is: it´s never too later ..."
      />
    </ContentImages>
    <Circle x="67%" y="100%" />
  </Container>
);

export default SectionFeatured;
