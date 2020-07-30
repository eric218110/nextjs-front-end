import styled, { css } from 'styled-components';
import { MdStar } from 'react-icons/md';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { shade } from 'polished';

interface IIconProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 173px;
  align-items: center;
`;

export const ContentLeft = styled.div`
  max-width: 50%;
  h1 {
    width: 100%;
    max-width: 418px;
    font-size: 36px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.title};
    margin-bottom: 145px;
  }
  p {
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 24px;
    margin: 20px 0 33px 0;
    width: 450px;
  }
  strong {
    color: ${(props) => props.theme.colors.title};
    font-weight: bold;
    font-size: 22px;
  }
  h6 {
    color: ${(props) => props.theme.colors.title};
    font-weight: normal;
    font-size: 18px;
    line-height: 48px;
  }
`;

export const StarIcon = styled(MdStar).attrs({
  size: '25px',
  color: '#FFBB0C',
})`
  margin-right: 7px;
`;

export const ShapeImage = styled.div`
  position: relative;

  footer {
    position: absolute;
    background: ${(props) => props.theme.colors.background};
    width: 132px;
    height: 60px;
    border-top-left-radius: 15px;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const IconLeft = styled(IoIosArrowDropleft).attrs({
  size: '45px',
})<IIconProps>`
  margin: 0 0 0 13px;
  margin-right: 7px;
  fill: ${(props) => props.theme.colors.subtitle};
  &:hover {
    cursor: pointer;
    fill: ${(props) => shade(0.2, props.theme.colors.subtitle)};
  }
  ${(props) =>
    props.active &&
    css`
      fill: ${props.theme.colors.title};
      &:hover {
        cursor: pointer;
        fill: ${shade(0.2, props.theme.colors.title)};
      }
    `};
`;

export const IconRight = styled(IoIosArrowDropright).attrs({
  size: '45px',
})<IIconProps>`
  margin: 0 13px 0 0;
  margin-right: 7px;
  fill: ${(props) => props.theme.colors.subtitle};
  &:hover {
    cursor: pointer;
    fill: ${(props) => shade(0.2, props.theme.colors.subtitle)};
  }
  ${(props) =>
    props.active &&
    css`
      fill: ${props.theme.colors.title};
      &:hover {
        cursor: pointer;
        fill: ${shade(0.2, props.theme.colors.primary)};
      }
    `};
`;
