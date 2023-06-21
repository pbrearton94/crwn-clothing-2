import React, { Fragment, useContext } from "react";
import SHOP_DATA from "../../shop-data";
import {
  CategoriesContext,
  ProductContext,
  ProductsContext,
} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./categories-preview.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
