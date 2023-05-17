import { useState } from 'react';
import DisplayCategory from './DisplayCategory';
import { NavLink } from 'react-router-dom';

const StaticCode = () => {
  const [category, setCategory] = useState([
    {
      id: 'fgsa2142fa',
      name: 'Keyboards',
      description: 'Buy different keyboard from any brand available',
    },
    {
      id: 'xasgy42fa',
      name: 'Headphones',
      description: 'Find best-fit for your ears',
    },
  ]);

  return (
    <>
      <div className="home">
        <header className="main-header">
          <div className="intro">
            <h1 className="intro-heading">
              Welcome to ShopEase, your one-stop destination for all your
              shopping needs!
            </h1>
            <p className="intro-para">
              Discover a world of endless possibilities as you explore our
              extensive collection of products. From the latest fashion trends
              to innovative gadgets, from home essentials to beauty and wellness
              products, we have it all. With a wide range of categories to
              choose from, youll find everything youre looking for, and more!
            </p>
            <h2 className="intro-cta">
              Start shopping today and experience the ultimate convenience of
              online shopping!
            </h2>
            <NavLink to="/category/fgsa2142fa">
              <button
                className="btn btn-primary"
                style={{ marginRight: '15px' }}
              >
                Buy Keyboards
              </button>
            </NavLink>
            <NavLink to="/category/xasgy42fa">
              <button className="btn btn-secondary">Buy Headphones</button>
            </NavLink>
          </div>
          <DisplayCategory category={category} setCategory={setCategory} />
        </header>
      </div>
    </>
  );
};

export default StaticCode;
