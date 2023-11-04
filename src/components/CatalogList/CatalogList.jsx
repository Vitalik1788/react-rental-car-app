import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectFavorite, selectIsLoading, selectItems } from 'redux/selectors';
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
  LoadMore,
  DropdownBox,
  DropdownLabel,
} from './CatalogList.styled';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import Spinner from 'components/Spinner/Spinner';
import { addToFavorite, loadMore } from 'redux/carsOperation';
import { ToastContainer, toast } from 'react-toastify';
import Dropdown from 'react-dropdown';

const options = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];
const defaultOption = options[0];

const CatalogList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cityCar, setCityCar] = useState('');
  const [modalCar, setModalCar] = useState("");
  const [accessories, setAccessories] = useState(null);
  const [functionalities, setFunctionalities] = useState(null);
  const error = useSelector(selectError);
  const cars = useSelector(selectItems);
  const favorCars = useSelector(selectFavorite);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  

  function modalOpen(id) {
    let carChoice = cars.flat().find(car => car.id === id);
    setModalCar(carChoice);
    const indexCar = carChoice.address.indexOf(',');
    const cityCar = carChoice.address.slice(indexCar + 2);
    const city = cityCar.split(',', 1);
    setCityCar(city);

    const acsseor = carChoice.accessories.map(el => " | " + el);
    setAccessories(acsseor);

    const funtional = carChoice.functionalities.map(el => ' | ' + el);
    setFunctionalities(funtional);

    setIsOpen(true);
  }

  function modalClose() {
    setIsOpen(false);
  }

  function addCarFavorite(id) {
    let carChoice = cars.flat().find(car => car.id === id);
    const inFavorit = favorCars.some(e => e.id === id)
    if (inFavorit === true) {
      return toast.info('The car is already added to the favorites');
    }
    dispatch(addToFavorite(carChoice));   
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <DropdownBox>
        <DropdownLabel>Car brand</DropdownLabel>
        <Dropdown
          options={options}
          // onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
      </DropdownBox>

      {isLoading ? (
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <Spinner />
        </div>
      ) : (
        <Section>
          <List>
            {cars &&
              !error &&
              cars
                .flat()
                .map(
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
                          {address.slice(index + 2).split(',', 1)} | Ukraine |{' '}
                          {rentalCompany} | {type} |{' '}
                          {mileage.toLocaleString('de-DE')} |{' '}
                          {functionalities[0]}
                        </CarDetails>
                        <Button type="button" onClick={() => modalOpen(id)}>
                          Learn more
                        </Button>
                        <AiOutlineHeart
                          size={18}
                          color="white"
                          style={{
                            position: 'absolute',
                            top: '14px',
                            right: '14px',
                            cursor: 'pointer',
                          }}
                          onClick={() => addCarFavorite(id)}
                        />
                      </CatalogItem>
                    );
                  }
                )}
          </List>
          <LoadMore
            type="button"
            onClick={() => {
              setPage(prev => prev + 1);
              dispatch(loadMore(page));
            }}
          >
            Load More
          </LoadMore>
        </Section>
      )}

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
          {accessories}
        </p>
        <p
          style={{
            fontFamily: 'Manrope',
            fontSize: '12px',
            color: 'rgba(18, 20, 23, 0.5)',
            marginBottom: 24,
          }}
        >
          {functionalities}
        </p>
        <h3 style={{ fontSize: 14, fontFamily: 'Manrope', marginBottom: 8 }}>
          Rental Conditions:{' '}
        </h3>
        <RentalConditionList>
          <RentalConditionItem>
            {`Minimum age:`}{' '}
            <span
              style={{
                color: '#3470FF',
                fontFamily: 'Montserrat',
                fontWeight: 600,
              }}
            >
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
            <span
              style={{
                color: '#3470FF',
                fontFamily: 'Montserrat',
                fontWeight: 600,
              }}
            >
              {modalCar && modalCar.mileage.toLocaleString('en-IN')}
            </span>
          </RentalConditionItem>
          <RentalConditionItem>
            {`Price`}{' '}
            <span
              style={{
                color: '#3470FF',
                fontFamily: 'Montserrat',
                fontWeight: 600,
              }}
            >
              {modalCar.rentalPrice}
            </span>
          </RentalConditionItem>
        </RentalConditionList>
        <ModalBtn type="button">Rental car</ModalBtn>
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
