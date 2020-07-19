import styled from 'styled-components';

type SvgIconProps = {
  width: string;
  height: string;
  cursor: string;
}

export const SvgIcon = styled.svg<SvgIconProps>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  cursor: ${props => props.cursor ? props.cursor : "none"};
  margin: 2vh;

  & path {
    fill: currentColor;
  }
`;