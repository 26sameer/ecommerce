const CartReducer = (state, action) => {
  // ADD to CART
  if (action.type === 'ADD_TO_CART') {
    let { id, name, price, thumbnail, currency, categoryId, quantity } =
      action.payload;

    let existingProduct = state.cart.find(currItem => currItem.id == id);
    if (existingProduct) {
      let updatedProduct = state.cart.map(currElem => {
        if (currElem.id == id) {
          let newQuantity = currElem.quantity + quantity;
          return {
            ...currElem,
            quantity: newQuantity,
          };
        } else {
          return currElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id,
        name,
        price,
        thumbnail,
        currency,
        categoryId,
        quantity,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  // REMOVE_ITEM
  if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter(
      currItem => currItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  // CLEAR_CART
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    };
  }
  // INCREASE AND DECREASE
  if (action.type === 'INCREASE') {
    let updatedProduct = state.cart.map(currItem => {
      if (currItem.id === action.payload) {
        let newQuantity = currItem.quantity + 1;
        console.log(currItem);
        return {
          ...currItem,
          quantity: newQuantity,
        };
      } else {
        return currItem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === 'DECREASE') {
    let updatedProduct = state.cart.map(currItem => {
      if (currItem.id === action.payload) {
        let newQuantity = currItem.quantity - 1;
        if (newQuantity <= 1) {
          newQuantity = 1;
        }
        console.log(currItem);
        return {
          ...currItem,
          quantity: newQuantity,
        };
      } else {
        return currItem;
      }
    });

    return {
      ...state,
      cart: updatedProduct,
    };
  }

  // // TOTAL CART ITEMS

  // if (action.type === 'TOTAL_CART_ITEMS') {
  //   let updatedItemVal = state.cart.reduce((initialValue, currElem) => {
  //     const { quantity } = currElem;
  //     initialValue = initialValue + quantity;
  //     return initialValue;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: updatedItemVal,
  //   };
  // }

  // // TOTAL CART PRICE

  // if (action.type === 'TOTAL_CART_PRICE') {
  //   let updatedCartPrice = state.cart.reduce((initialValue, currElem) => {
  //     const { price, quantity } = currElem;
  //     initialValue = initialValue + price * quantity;
  //     return initialValue;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_price: updatedCartPrice,
  //   };
  // }
  // Simplifying aboce lines of code cause both have a lot of similarities

  if (action.type === 'TOTAL_CART_ITEM_PRICE') {
    const { total_item, total_price } = state.cart.reduce(
      (accum, currElem) => {
        const { price, quantity } = currElem;
        accum.total_item += quantity;
        accum.total_price += price * quantity;
        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );

    return {
      ...state,
      total_item,
      total_price,
    };
  }
  // LAST RETURN OF STATE
  return state;
};

export default CartReducer;
