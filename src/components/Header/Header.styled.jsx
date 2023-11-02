import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

const navLink = NavLink;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px; 
`;

export const IconTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 5px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-left: auto;
  
`

export const NavLinkStyled = styled(navLink)`
  text-decoration: none;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: 500;
  color: black;
  

  :hover, :focus {
    color: red; 
  }

`