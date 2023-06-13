import React, { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";
export const ProductsContext = createContext({
  products: [],
  setCurrentProduct: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setCurrentProducts] = useState(SHOP_DATA);
  const value = { products };

  //signOutUser();

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChangedListener((currentProduct) => {
  //       if (currentProduct) {
  //         createUserDocumentFromAuth(currentProduct);
  //       }
  //       setCurrentProduct(user);
  //       //console.log(user);
  //     });

  //     return unsubscribe;
  //   }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
