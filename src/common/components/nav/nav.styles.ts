import { css } from '@emotion/core';
import { styled, media, Theme } from '../../../styles';

export const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;

const activeNav = (theme: Theme) => css`
  background-color: ${theme.colors.primary};
  position: relative;

  &::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    bottom: -8px;
    right: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid ${theme.colors.primary};
  }

  &:hover {
    cursor: pointer;
    border-color: black;
  }
`;

const visitedNav = (theme: Theme) => css`
  background-color: ${theme.colors.primary};

  &:hover {
    cursor: pointer;
    border-color: black;
  }
`;

interface NavItemProps {
  active: boolean;
  visited: boolean;
}

export const NavItem = styled.a<NavItemProps>`
  text-transform: uppercase;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  flex-basis: 100%;

  ${media.medium`
    flex-grow: 1;
    flex-basis: auto;
  `}

  ${({ theme, active }) => active && activeNav(theme)};
  ${({ theme, visited }) => visited && visitedNav(theme)};
`;

export const Title = styled.span`
  padding-left: 1rem;
`;

export const Icon = styled.i`
  padding-left: 0.5rem;
`;
