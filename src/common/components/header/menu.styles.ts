import { styled, media } from '../../../styles';

export const Menu = styled.ul`
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  list-style-type: none;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  ${media.medium`
    position: absolute;
    width: calc(100% - 2rem);
    right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
  `}
`;
