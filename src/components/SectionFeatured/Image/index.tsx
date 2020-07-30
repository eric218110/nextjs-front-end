import React from 'react';
import { Container } from './styles';

interface IProps {
  imageURL: string;
  title: string;
  subtitle: string;
}

const Image: React.FC<IProps> = ({ imageURL, title, subtitle }) => {
  return (
    <Container>
      <img src={imageURL} alt="Vercel" />
      <footer>
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </footer>
    </Container>
  );
};

export default Image;
