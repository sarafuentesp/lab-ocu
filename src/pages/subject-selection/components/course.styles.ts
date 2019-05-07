import { styled } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Title = styled.h2`
  margin: 0;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const Icon = styled.i`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.dark};
  padding-left: 2rem;
`;

export const Subject = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`
