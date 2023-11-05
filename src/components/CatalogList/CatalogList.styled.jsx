import styled from '@emotion/styled';
import Modal from 'react-modal';
import Select from 'react-select';

const select = Select;

//MODAL STYLES
const modal = Modal;

export const StyleModal = styled(modal)`
  position: fixed;
  padding: 40px;
  max-width: 541px;
  max-height: 752px;
  border-radius: 24px;
  background-color: #ffffff;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;  

  @media screen and (max-width: 480px) {
    height: 85%;
  }
  
`;

export const ModalIMG = styled.img`
  margin-bottom: 14px;
  width: 100%;
  height: 248px;
  border-radius: 14px;
  box-sizing: border-box;
  @media screen and (max-width: 480px) {
    width: 50%;
  }
`;

export const RentalConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

`

export const RentalConditionItem = styled.li`
  list-style: none;
  padding: 7px 14px 7px 14px;
  background-color: #f9f9f9;
  font-family: 'Montserrat';
  font-size: 12px;
  color: #363535;
  border-radius: 35px;
`;

export const ModalBtn = styled.a`
display: inline-block;
  margin-top:24px;
  padding: 14px 50px;
  border-radius: 12px;
  margin-right: auto;
  color: #ffffff;
  background-color: #3470ff;
  font-size: 14px;
  font-family: 'Manrope';
  border: transparent;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #0b44cd;
  }
`;

// MODAL STYLES

export const Section = styled.section`
  padding: 50px 20px;
`;

export const DropdownBox = styled.div`
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  
  `
export const DropdownLabel = styled.p`
  margin-bottom: 8px;
  font-family: "Manrope";
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  `;

export const DropdownInput = styled(select)`
  max-width: 224px;
  margin-right: 18px;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  border-radius: 14px;

  
`;

export const DropdownBtn = styled.button`
  padding: 12px 44px 12px 44px;
  border-radius: 12px;
  background-color: #3470ff;
  color: #ffffff;
`; 


export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-top: -50px;
`;

export const CatalogItem = styled.li`
  position: relative;
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
  height: 320px;
  width: 100%;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const Model = styled.p`
  margin-bottom: 8px;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #121417;
`;

export const CarDetails = styled.p`
  font-family: 'Manrope';
  font-size: 12px;
  line-height: 1.5;
`;

export const Button = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 28px;
  font-family: 'Manrope';
  font-size: 14px;
  background-color: #3470ff;
  color: #ffffff;
  border-radius: 12px;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #0b44cd;
  }
`;

export const LoadMore = styled.button`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #3470ff;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;

  :hover,
  :focus {
    color: #0b44cd;
  }
`;
