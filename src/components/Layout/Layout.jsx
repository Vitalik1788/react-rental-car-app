import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Spinner from 'components/Spinner/Spinner';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoading } from 'redux/selectors';


const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      {!isLoading && <Footer />}
    </>
  );
};

export default Layout;
