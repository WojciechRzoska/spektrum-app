import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 20px;
  font-weight: 800;
  line-height: 33px;
  margin-bottom: 55px;
  position: relative;
  flex-direction: column;

  &::after {
    content: '';
    width: 166px;
    height: 9px;
    position: absolute;
    top: 50px;
    right: 0px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }

  @media (max-width: 768px) {
    &::after {
      content: '';
      width: 166px;
      height: 9px;
      position: absolute;
      top: 80px;
      right: 0px;
      background-color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`;
