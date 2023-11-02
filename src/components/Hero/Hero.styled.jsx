import styled from "@emotion/styled";
import heroImage from '../../images/car_trip.jpg';


export const HeroBox = styled.section`
  height: 700px;
  background-image: url(${heroImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

`

export const HeroTitle = styled.h1`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 50px;
  color: black;
  font-family: 'Roboto';
  font-size: 48px;
`;
