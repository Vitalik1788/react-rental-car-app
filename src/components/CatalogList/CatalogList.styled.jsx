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
