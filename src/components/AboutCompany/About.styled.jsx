import styled from '@emotion/styled';

export const AboutBox = styled.section`
  padding: 50px 15px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -24px;
  margin-top: -48px;
`;

export const CardBox = styled.li`
  list-style: none;
  flex-basis: calc(100% / 3 - 24px);
  margin-left: 24px;
  margin-top: 48px;
  border-radius: 20px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);

  @media screen and (max-width: 480px) {
    flex-basis: calc(100% / 1 - 24px);
  }
`;

export const IMG = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 20px;
`;

export const CardText = styled.p`
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
`;
