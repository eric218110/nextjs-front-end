import styled from 'styled-components';
import plus from '../../../public/svg/plus.svg';
import circle from '../../../public/svg/circle.svg';

interface IPropsPosition {
  x: string;
  y: string;
}

export const ContainerPlus = styled(plus)<IPropsPosition>`
  position: absolute;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
`;

export const ContainerCircle = styled(circle)<IPropsPosition>`
  position: absolute;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
`;
