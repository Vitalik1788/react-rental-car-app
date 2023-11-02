import icon from "../../images/header_icon.png";
import { HeaderStyled, IconTitle, Nav, NavLinkStyled } from './Header.styled';

const Header = () => {
  
  return (
    <HeaderStyled>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <img src={icon} alt="car-icon" width={120} />
        <IconTitle>Best Car Rent</IconTitle>
      </div>
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorite">Favorite</NavLinkStyled>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;