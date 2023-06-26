import React, { Fragment, useContext, useEffect } from "react";
import SHOP_DATA from "../../shop-data";
import {
  CategoriesContext,
  CategoriesProvider,
  ProductContext,
  ProductsContext,
} from "../../contexts/categories.context";
import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  setCategories,
  setCategoriesMap,
} from "../../store/categories/category.action";
import { useDispatch } from "react-redux";
const Shop = () => {
  //const { categoriesMap } = useContext(CategoriesContext);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
