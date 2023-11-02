import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import MainPage from 'pages/MainPage';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>} />
          <Route path='catalog' element={<CatalogPage/>} />
          <Route path='favorite' element={<FavoritePage/>} />
        </Route>
      </Routes>
    </div>
  );
};
