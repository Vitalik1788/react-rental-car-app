import { FooterContacts, FooterIMG, FooterStyled, FooterText, FooterTitle } from './Footer.styled';
import logo from "../../images/header_icon.png";
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {

  return (
    <>
      <FooterStyled>
        <FooterIMG src={logo} alt="Car icon" />
        <FooterTitle>Best Car Rent</FooterTitle>
        <FooterContacts>Contact as | +380730000000 | BestCarRent@example.com</FooterContacts>
        <FooterText>
          {' '}
          &copy; 2023 | All Rights Reserved | Developed with{' '}
          <AiFillHeart size={22} color="red" /> by Vitalii Tarasenko
        </FooterText>
      </FooterStyled>
    </>
  );

}


export default Footer;