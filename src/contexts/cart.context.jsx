// import React, { createContext, useReducer } from "react";
// import { createAction } from "../utils/reducer/reducer.utils";

// export const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemtoRemove) => {
//   // find cart item to remove
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemtoRemove.id
//   );
//   // check if quantity is equal to 1, if it is remove that item from the cart
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemtoRemove.id);
//   }
//   // return back cartitems with matching cart item with reduced quantity
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemtoRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const clearCartItem = (cartItems, cartItemtoremove) => {
//   return cartItems.filter((cartItem) => cartItem.id !== cartItemtoremove.id);
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartTotal: 0,
//   cartItemCount: 0,
// });

// const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: "SET_CART_ITEMS",
//   SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
// };

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartTotal: 0,
//   cartCount: 0,
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       throw new Error(`Unhandled type of ${type} in cartReducer`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   //const [isCartOpen, setIsCartOpen] = useState(false);
//   // const [cartItems, setCartItems] = useState([]);
//   // const [cartItemCount, setCartItemCount] = useState(0);
//   // const [cartTotal, setCartTotal] = useState(0);
//   const [{ cartItems, isCartOpen, cartItemCount, cartTotal }, dispatch] =
//     useReducer(cartReducer, INITIAL_STATE);

//   // // runs whenever the cartItems are updated
//   // useEffect(() => {
//   //   const count = cartItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity,
//   //     0
//   //   );
//   //   setCartItemCount(count);
//   // }, [cartItems]);

//   // useEffect(() => {
//   //   const newCartTotal = cartItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//   //     0
//   //   );
//   //   setCartTotal(newCartTotal);
//   // }, [cartItems]);

//   const updateCartItemsReducer = (newCartItems) => {
//     const newCartCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );

//     const newCartTotal = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );

//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems: newCartItems,
//         cartTotal: newCartTotal,
//         cartItemCount: newCartCount,
//       })
//     );
//   };

//   const addItemToCart = (product) => {
//     const newCartItems = addCartItem(cartItems, product);
//     updateCartItemsReducer(newCartItems);
//   };

//   const removeItemFromCart = (product) => {
//     const newCartItems = removeCartItem(cartItems, product);
//     updateCartItemsReducer(newCartItems);
//   };

//   const clearItemFromCart = (product) => {
//     const newCartItems = clearCartItem(cartItems, product);
//     updateCartItemsReducer(newCartItems);
//   };

//   const setIsCartOpen = (bool) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemFromCart,
//     clearItemFromCart,
//     cartItems,
//     cartItemCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
