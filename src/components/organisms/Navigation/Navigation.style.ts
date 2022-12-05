import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 11px 26px;
`;
export const StyledLink = styled(NavLink)`
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 100%;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  text-decoration: none;
  width: 236px;
  position: relative;
  padding: 10px 43px 10px 43px;
`;
