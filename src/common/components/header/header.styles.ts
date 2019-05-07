import { styled, media } from '../../../styles';

export const Container = styled.header`
  display: flex;
`;

export const Logo = styled.img`
  display: none;
  ${media.medium`
    display: block;
    max-height: 5rem;
    width: auto;
    height: auto;
  `}
`;

export const UserSession = styled.div`
  flex-grow: 1;
  padding-left: 1rem;
  padding-right: 1rem;
  ${media.medium`
    flex-grow: 0;
    margin-left: auto;
    position: relative;
  `}
`;

export const Certification = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-style: italic;
  padding-bottom: 0.5rem;
`;

export const User = styled.span`
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.i`
  font-size: 2rem;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.dark};
  padding-right: 1rem;
`;
