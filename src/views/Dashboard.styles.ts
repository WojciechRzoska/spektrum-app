import { ButtonWrapper } from 'components/atoms/Button/Button.style';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 29px;
  margin: 88px 0px 130px 0px;
`;

export const UserWrappper = styled.div`
  width: 800px;
  height: 739px;
  background-color: ${({ theme }) => theme.colors.dataBackground};
  border-radius: 500px 60px 300px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;
  flex-direction: column;

  img {
    border-radius: 200px 20px 100px 50px;
  }
  @media (max-width: 768px) {
    width: 50vh;

    img {
      border-radius: 200px 20px 100px 50px;
      width: 30vh;
    }
  }
`;

export const NextUserBtn = styled(ButtonWrapper)`
  background-color: ${({ theme }) => theme.colors.green};
  padding: 10px 30px;
  font-weight: bold;
`;

export const UserInfo = styled.div`
  width: 333px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    align-self: start;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    p {
      align-self: center;
    }
  }
`;
