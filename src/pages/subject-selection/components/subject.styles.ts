import { styled } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.light};
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const GroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.secondary};
`;
