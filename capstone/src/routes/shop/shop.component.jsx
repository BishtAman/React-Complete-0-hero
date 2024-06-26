import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import "./shop.styles.scss";
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();

      dispatch(setCategoriesMap(categories));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>} />
      <Route path=':category' element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
