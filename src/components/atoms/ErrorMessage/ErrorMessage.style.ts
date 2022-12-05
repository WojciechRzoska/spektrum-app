import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.red};
  align-self: flex-end;
  align-items: center;
`;
