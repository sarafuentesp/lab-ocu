import { styled } from '../../../styles';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.secondary};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
`;
