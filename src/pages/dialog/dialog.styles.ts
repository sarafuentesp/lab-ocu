import { styled, media } from '../../styles';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
  min-height: 30%;
`;

export const NavItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  cursor: pointer;

  &:hover {
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.hover};
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Icon = styled.i`
  font-size: 5rem;
`;

export const NavTitle = styled.p`
  font-size: 0.7rem;
  position: absolute;
  bottom: -2rem;
`;

export const Question = styled.div`
  flex-grow: 2;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const QuestionText = styled.p`
  text-align: center;
`;

export const Response = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ResponseButton = styled.button`
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #f9f9f9;
  border-width: 1px;
  border-color: #d0d0d0;
  outline: none;
  cursor: pointer;
  flex-basis: 100%;

  display: inline-block;
  text-align: center;
  color: black;
  box-sizing: border-box;
  border-style: outset;
  text-decoration: none;
  font-size: 1rem;

  ${media.extraSmall`
    flex-basis: auto;
    min-width: 125px;
  `}

  ${media.large`
    min-width: 150px;
  `}

  ${media.extraLarge`
    min-width: 200px;
  `}

  &:hover {
    background-color: #d9d9d9;
  }
`;
