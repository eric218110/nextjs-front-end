import React from 'react';
import { Container, Image, ContentRight } from './styles';
import Button from '../Button';
import { Plus } from '../Shape';

const SectionExplorer: React.FC = () => (
  <Container>
    <Image />
    <Plus x="55%" y="150%" />
    <ContentRight>
      <h1>A new way to explore the world</h1>
      <p>
        For decades travellers have reached for Lonely Planet books when looking
        to plan and execute their perfect trip, but now, they can also let
        Lonely Planet Experiences lead the way
      </p>
      <Button>Learn more</Button>
    </ContentRight>
  </Container>
);

export default SectionExplorer;
