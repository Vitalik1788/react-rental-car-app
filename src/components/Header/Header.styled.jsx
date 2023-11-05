import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const navLink = NavLink;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
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

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const NavLinkStyled = styled(navLink)`
  text-decoration: none;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  color: black;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 5px;
  }

  :hover,
  :focus {
    color: red;
  }
`;
