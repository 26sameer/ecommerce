import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const CheckOutBtn = ({ data }) => {
  const { addToCart } = useCartContext();

  const { id, name, price, thumbnail, currency, categoryId, quantity } = data;
  return (
    <>
      <NavLink to="/checkout">
        <button
          className="btn btn-primary"
          onClick={() =>
            addToCart(
              id,
              name,
              price,
              thumbnail,
              currency,
              categoryId,
              quantity
            )
          }
        >
          Add to Cart
        </button>
      </NavLink>
    </>
  );
};

export default CheckOutBtn;
