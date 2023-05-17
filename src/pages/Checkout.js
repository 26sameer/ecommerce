import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCartContext } from '../context/CartContext';
import ToggleQuantity from '../components/ToggleQuantity';

function Checkout() {
  const {
    cart,
    removeItem,
    clearCart,
    setDecrease,
    setIncrease,
    total_price,
    shippingFee,
  } = useCartContext();

  console.log(cart);

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h3>Cart Empty</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="cart-heading">
          <p>Item</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Remove Item</p>
        </div>
        <hr />

        <div>
          {cart.map(currElem => {
            return (
              <div key={currElem.id} className="cart-item">
                <p className="item-name">{currElem.name}</p>
                <ToggleQuantity
                  currElem={currElem}
                  setIncrease={() => setIncrease(currElem.id)}
                  setDecrease={() => setDecrease(currElem.id)}
                />
                <button
                  className="btn btn-secondary item-rmv"
                  onClick={() => removeItem(currElem.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <hr />

        <div className="total">
          <div className="cart-btn">
            <NavLink to="/">
              <button
                style={{ marginRight: '15px' }}
                className="btn btn-primary"
              >
                Continue Shopping
              </button>
            </NavLink>
            <button className="btn btn-secondary" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
          <div className="cart-total">
            <p>
              Sub Total: <strong>${total_price} USD</strong>
            </p>
            <p>
              Shipping Fee:<strong> ${shippingFee} USD</strong>
            </p>
            <p>
              <strong>Total Price: ${total_price + shippingFee} USD</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
