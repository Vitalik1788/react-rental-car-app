import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectItems } from 'redux/selectors';
import {
  CatalogItem,
  Model,
  List,
  Section,
  CatalogImage,
  Button,
  CarDetails,
  StyleModal,
  ModalIMG,
  ModalBtn,
  RentalConditionItem,
  RentalConditionList,
} from './CatalogList.styled';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';

const CatalogList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cityCar, setCityCar] = useState('');
  const [modalCar, setModalCar] = useState("");
  const error = useSelector(selectError);
  const cars = useSelector(selectItems);

  function modalOpen(id) {
    let carChoice = cars.find(car => car.id === id);
    setModalCar(carChoice);
    const indexCar = carChoice.address.indexOf(',');
    const cityCar = carChoice.address.slice(indexCar + 2);
    const city = cityCar.split(',', 1);
    setCityCar(city);
    setIsOpen(true);
  }

  function modalClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Section>
        <List>
          {cars &&
            !error &&
            cars.map(
              ({
                id,
                img,
                make,
                model,
                year,
                rentalPrice,
                address,
                rentalCompany,
                type,
                mileage,
                functionalities,
              }) => {
                const index = address.indexOf(',');
                const city = address.slice(index + 2);

                return (
                  <CatalogItem key={id}>
                    <CatalogImage src={img} alt={make} />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Model>
                        {make} {model}, {year}
                      </Model>
                      <Model>{rentalPrice}</Model>
                    </div>
                    <CarDetails>
                      {city} | {rentalCompany} | {type} | {mileage} |{' '}
                      {functionalities[0]}
                    </CarDetails>
                    <Button type="button" onClick={() => modalOpen(id)}>
                      Learn more
                    </Button>
                    <AiOutlineHeart
                      size={18}
                      color="white"
                      style={{ position: 'absolute', top: '5%', left: '90%' }}
                    />
                  </CatalogItem>
                );
              }
            )}
        </List>
        <button type="button">Load More</button>
      </Section>

      <StyleModal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={modalClose}
        style={{
          overlay: {
            backgroundColor: 'rgba(18, 20, 23, 0.5)',
          },
        }}
      >
        <ModalIMG src={modalCar.img} alt={modalCar.make} />
        <p
          style={{
            fontSize: '18px',
            fontWeight: 500,
            fontFamily: 'Manrope',
            marginBottom: 8,
          }}
        >
          {modalCar.make}{' '}
          <span style={{ color: '#3470FF' }}>{modalCar.model}</span>,{' '}
          {modalCar.year}
        </p>
        <p
          style={{
            fontFamily: 'Manrope',
            fontSize: '12px',
            color: 'rgba(18, 20, 23, 0.5)',
            marginBottom: 4,
            lineHeight: 1.5,
          }}
        >
          {cityCar} | {`Ukraine`} | {`Id: ${modalCar.id}`} |{' '}
          {`Year: ${modalCar.year}`} | {`Type: ${modalCar.type}`}
        </p>
        <p
          style={{
            fontFamily: 'Manrope',
            fontSize: '12px',
            color: 'rgba(18, 20, 23, 0.5)',
            marginBottom: 14,
          }}
        >
          {`Fuel Consumption: ${modalCar.fuelConsumption}`} |{' '}
          {`Engine Size: ${modalCar.engineSize}`}
        </p>
        <p
          style={{
            fontFamily: 'Manrope',
            fontSize: 14,
            color: '#121417',
            marginBottom: 24,
            lineHeight: 1.42,
          }}
        >
          {modalCar.description}
        </p>
        <h3 style={{ fontSize: 14, marginBottom: 8, fontFamily: 'Manrope' }}>
          Accessories and functionalities:
        </h3>
        <p
          style={{
            fontFamily: 'Manrope',
            fontSize: '12px',
            color: 'rgba(18, 20, 23, 0.5)',
          }}
        >
          {modalCar.accessories}
        </p>
        <p
          style={{
            fontFamily: 'Manrope',
            fontSize: '12px',
            color: 'rgba(18, 20, 23, 0.5)',
            marginBottom: 24,
          }}
        >
          {modalCar.functionalities}
        </p>
        <h3 style={{ fontSize: 14, fontFamily: 'Manrope', marginBottom: 8 }}>
          Rental Conditions:{' '}
        </h3>
        <RentalConditionList>
          <RentalConditionItem>
            {`Minimum age:`}{' '}
            <span style={{ color: '#3470FF', fontFamily: 'Montserrat', fontWeight: 600 }}>
              {modalCar && modalCar.rentalConditions.slice(13, 15)}
            </span>
          </RentalConditionItem>
          <RentalConditionItem>
            {modalCar && modalCar.rentalConditions.slice(16, 38)}
          </RentalConditionItem>
          <RentalConditionItem>
            {modalCar && modalCar.rentalConditions.split('\n').pop()}
          </RentalConditionItem>
          <RentalConditionItem>
            {`Mileage:`}{' '}
            <span style={{ color: '#3470FF', fontFamily: 'Montserrat', fontWeight: 600 }}>
              {modalCar && modalCar.mileage.toLocaleString('en-IN')}
            </span>
          </RentalConditionItem>
          <RentalConditionItem>
            {`Price`}{' '}
            <span style={{ color: '#3470FF', fontFamily: 'Montserrat', fontWeight: 600 }}>{modalCar.rentalPrice}</span>
          </RentalConditionItem>
        </RentalConditionList>
        <ModalBtn type='button'>Rental car</ModalBtn>
        <AiOutlineClose
          onClick={modalClose}
          size={24}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            cursor: 'pointer',
          }}
        />
      </StyleModal>
    </>
  );
};

export default CatalogList;
