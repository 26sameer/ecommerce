import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { BsCartCheckFill } from 'react-icons/bs';

const Navbar = () => {
  const { total_item } = useCartContext();

  return (
    <nav className="navbar">
      <ul className="nav">
        <li>
          <NavLink to="/">
            <span className="logo">ShopEase.</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#1c1034' : '',
            })}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? '#1c1034' : '',
            })}
            to="/checkout"
          >
            Checkout <BsCartCheckFill />{' '}
            <span className="total-item">{total_item}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
