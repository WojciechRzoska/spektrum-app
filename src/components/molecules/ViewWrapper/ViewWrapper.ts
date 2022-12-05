import styled from 'styled-components';

export const ViewWrapper = styled.div`
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 752px;
  padding: 40px 50px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    width: 224px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    align-self: center;
    border: none;
    margin-top: 18px;
    padding: 10px 0px;
  }
`;
