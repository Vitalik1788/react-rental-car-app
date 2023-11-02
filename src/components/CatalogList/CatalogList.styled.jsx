import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 50px 20px;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -50px;
`;

export const CatalogItem = styled.li`
  list-style: none;
  flex-basis: calc(100% / 4 - 30px);
  margin-left: 30px;
  margin-top: 50px;

  @media screen and (max-width: 480px) {
    flex-basis: calc(100% / 1 - 30px);
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    flex-basis: calc(100% / 3 - 30px);
  }
`;

export const CatalogImage = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
`; 

export const Model = styled.p`
margin-bottom: 8px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #121417;
`;

export const CarDetails = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 28px;
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #3470ff;
  color: #ffffff;
  border-radius: 12px;

  :hover,
  :focus {
    background-color: #0b44cd;
  }
`; 
