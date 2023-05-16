import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCartContext } from '../context/CartContext';
import ToggleQuantity from '../components/ToggleQuantity';

function Checkout() {
  const { cart, removeItem, clearCart, setDecrease, setIncrease } =
    useCartContext();

  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="container">
        <Navbar />
        <h3>Cart Empty</h3>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <Navbar />
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
                <p>{currElem.name}</p>
                <ToggleQuantity
                  currElem={currElem}
                  setIncrease={() => setIncrease(currElem.id)}
                  setDecrease={() => setDecrease(currElem.id)}
                />
                <button onClick={() => removeItem(currElem.id)}>Remove</button>
              </div>
            );
          })}
        </div>

        <hr />

        <NavLink to="/">
          <button>Continue Shopping</button>
        </NavLink>

        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </>
  );
}

export default Checkout;
