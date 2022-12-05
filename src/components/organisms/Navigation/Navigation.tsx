import { Wrapper, StyledLink } from './Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <p>Wojciech Rzóska</p>
      <StyledLink to="/registration">formularz rejestracyjny</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
