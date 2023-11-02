import icon from "../../images/header_icon.png";
import { HeaderStyled, Nav, NavLinkStyled } from './Header.styled';

const Header = () => {
  
  return (
    <HeaderStyled>
      <img src={icon} alt="car-icon" width={120} />
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorite">Favorite</NavLinkStyled>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;