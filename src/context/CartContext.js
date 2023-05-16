import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/CartReducer';
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const getLocalCartData = () => {
    let newCartData = localStorage.getItem('cart');
    if (newCartData === 'null' || newCartData === []) {
      return [];
    } else {
      return JSON.parse(newCartData);
    }
  };

  const initialState = {
    cart: getLocalCartData(),
    total_item: 0,
    total_price: 0,
    shippingFee: 5,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    id,
    name,
    price,
    thumbnail,
    currency,
    categoryId,
    quantity
  ) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, name, price, thumbnail, currency, categoryId, quantity },
    });
  };

  const setDecrease = id => {
    dispatch({
      type: 'DECREASE',
      payload: id,
    });
  };

  const setIncrease = id => {
    dispatch({
      type: 'INCREASE',
      payload: id,
    });
  };

  const removeItem = id => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Adding data to Local Storage
  useEffect(() => {
    // Simplifying some lines of code cause both have a lot of similarities
    // dispatch({ type: 'TOTAL_CART_ITEMS' });
    // dispatch({ type: 'TOTAL_CART_PRICE' });
    dispatch({ type: 'TOTAL_CART_ITEM_PRICE' });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
