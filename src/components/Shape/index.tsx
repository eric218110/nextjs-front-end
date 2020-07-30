import React from 'react';
import { ContainerPlus, ContainerCircle } from './styles';

interface IProps {
  x: string;
  y: string;
}

export const Plus: React.FC<IProps> = ({ x, y }) => (
  <ContainerPlus x={x} y={y} />
);

export const Circle: React.FC<IProps> = ({ x, y }) => (
  <ContainerCircle x={x} y={y} />
);
