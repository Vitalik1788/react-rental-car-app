import CatalogList from 'components/CatalogList/CatalogList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCars } from 'redux/carsOperation';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <CatalogList />
    </>
  );
};

export default CatalogPage;
