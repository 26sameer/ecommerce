import { NavLink, useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Navbar = () => {
  const { categoryID } = useParams();
  const { total_item } = useCartContext();

  return (
    <nav className="navbar">
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              backgroundColor: isActive ? '#545e6f' : '#333',
              padding: '10px',
              borderRadius: '15px',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              backgroundColor: isActive ? '#545e6f' : '#333',
              padding: '10px',
              borderRadius: '15px',
            })}
            to={`/category/${categoryID}`}
          >
            Category
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              backgroundColor: isActive ? '#545e6f' : '#333',
              padding: '10px',
              borderRadius: '15px',
            })}
            to="/checkout"
          >
            Checkout {total_item}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
