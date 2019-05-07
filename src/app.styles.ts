import { css } from '@emotion/core';
import { media, styled } from './styles';

const mediumStyles = css`
  grid-template-columns: 10% 1fr 10%;
  grid-template-areas:
    'nav nav nav'
    'header header header'
    '. main .'
    '. footer .';
`;

export const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'nav'
    'header'
    'main'
    'footer';
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: start;

  ${media.medium(mediumStyles)}
`;

export const Nav = styled.div`
  grid-area: nav;
`;

export const Header = styled.div`
  grid-area: header;
`;

export const Main = styled.div`
  grid-area: main;
  margin-top: 3rem;
`;

export const Footer = styled.div`
  grid-area: footer;
  align-self: end;
`;
