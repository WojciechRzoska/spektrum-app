import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 100%;
`;
