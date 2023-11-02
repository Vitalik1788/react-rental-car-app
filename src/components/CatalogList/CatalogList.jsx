import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "redux/carsOperation";
import { selectError, selectItems } from "redux/selectors";
import { CatalogItem, Model, List, Section, CatalogImage } from './CatalogList.styled';

const CatalogList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const cars = useSelector(selectItems);

  useEffect(() => {
    dispatch(getCars())
  }, [dispatch]);


  return (
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
            }) => {
              return (
                <CatalogItem key={id}>
                  <CatalogImage src={img} alt={make} />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Model>
                      {make} {model}, {year}
                    </Model>
                    <Model>{rentalPrice}</Model>
                  </div>
                  <p>
                    {address} | {rentalCompany}
                  </p>
                </CatalogItem>
              );
            }
          )}
      </List>
    </Section>
  );

}

export default CatalogList;