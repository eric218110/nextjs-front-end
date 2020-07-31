import React from 'react';
import { Container } from './styles';

interface IProps {
  imageURL: string;
  title: string;
  subtitle: string;
}

const Image: React.FC<IProps> = ({ imageURL, title, subtitle }) => {
  return (
    <Container src={imageURL}>
      <header />
      <section>
        <strong>{title}</strong>
        <p>{subtitle}</p>
        <a href="/r">Read more</a>
      </section>
    </Container>
  );
};

export default Image;
