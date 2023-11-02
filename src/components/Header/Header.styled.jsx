import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

const navLink = NavLink;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px; 
`;

export const Nav = styled.nav`
  display: flex;
  gap: 25px;
  
`

export const NavLinkStyled = styled(navLink)`
  text-decoration: none;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
  color: black;

  :hover, :focus {
    color: red; 
  }

`