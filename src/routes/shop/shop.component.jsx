import React, { Fragment, useContext } from "react";
import SHOP_DATA from "../../shop-data";
import {
  CategoriesContext,
  ProductContext,
  ProductsContext,
} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
