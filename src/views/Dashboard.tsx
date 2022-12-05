import { UsersContext } from 'providers/UsersProvier';
import { useContext, useEffect } from 'react';
import {
  NextUserBtn,
  UserInfo,
  UserWrappper,
  Wrapper,
} from './Dashboard.styles';

const Dashboard = () => {
  useEffect(() => {
    fetchNewUser();
  }, []);
  const context = useContext(UsersContext);
  if (!context) {
    return null;
  }
  const { user, fetchNewUser, image } = context;

  return (
    <Wrapper>
      <UserWrappper>
        <img src={image} alt="zdjęcie" />
        <UserInfo>
          <h1>{user?.name}</h1>

          <p>age: {user?.birth_year}</p>
          <p>eye color: {user?.eye_color}</p>
        </UserInfo>
      </UserWrappper>
      <NextUserBtn onClick={() => fetchNewUser()}>next profiles</NextUserBtn>
    </Wrapper>
  );
};

export default Dashboard;
