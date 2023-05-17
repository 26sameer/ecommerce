import { useState } from 'react';
import DisplayItems from '../components/DisplayItems';
import Navbar from '../components/Navbar';
import Filter from '../components/Filter';
import { Link, useParams } from 'react-router-dom';

function Category() {
  const { categoryID } = useParams();
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

  const [items, setItems] = useState([
    {
      id: '1a',
      name: 'Ducky One 2',
      price: 100,
      currency: 'USD',
      delivery: false,
      thumbnail:
        'https://mechanicalkeyboards.com/shop/images/products/large_DKME1961ST-USPDZZT1_10.jpg',
      inStock: true,
      categoryId: 'fgsa2142fa',
      quantity: 1,
    },
    {
      id: '2a',
      name: 'Varmilo Sakura',
      price: 140,
      currency: 'USD',
      delivery: true,
      thumbnail:
        'https://mechanicalkeyboards.com/shop/images/products/large_2790_SakuraTKL_1.jpg',
      inStock: true,
      categoryId: 'fgsa2142fa',
      quantity: 1,
    },
    {
      id: '3a',
      name: 'MK Disco',
      price: 80,
      currency: 'USD',
      delivery: true,
      thumbnail:
        'https://mechanicalkeyboards.com/shop/images/products/large_2017_Disco_White_Caps_1.png',
      inStock: false,
      categoryId: 'fgsa2142fa',
      quantity: 1,
    },
    {
      id: '4b',
      name: 'Razer Kraken',
      price: 60,
      currency: 'USD',
      delivery: false,
      thumbnail:
        'https://images-na.ssl-images-amazon.com/images/I/71BKQhFzDmL._AC_SY355_.jpg',
      inStock: false,
      categoryId: 'xasgy42fa',
      quantity: 1,
    },
    {
      id: '5b',
      name: 'HyperX Cloud II',
      price: 115,
      currency: 'USD',
      delivery: false,
      thumbnail:
        'https://images-na.ssl-images-amazon.com/images/I/719KtJ-RAFL._AC_SL1417_.jpg',
      inStock: true,
      categoryId: 'xasgy42fa',
      quantity: 1,
    },
    {
      id: '6b',
      name: 'Sennheiser PC 3 Chat',
      price: 60,
      currency: 'USD',
      delivery: false,
      thumbnail:
        'https://images-na.ssl-images-amazon.com/images/I/61kIoNSe3VL._SL1500_.jpg',
      inStock: true,
      categoryId: 'xasgy42fa',
      quantity: 1,
    },
  ]);

  const [filter, setFilter] = useState(true);

  const handleFilter = () => {
    setFilter(e => !e);
    return filter;
  };

  return (
    <>
      {categoryID === 'undefined' ? (
        <>
          <Navbar />
          <div className="container">
            <h2>
              Please Select a Category at <Link to="/">Home</Link> Page
            </h2>
          </div>
        </>
      ) : (
        <>
          <Navbar items={items} setItems={setItems} />
          <div className="container">
            <Filter handleFilter={handleFilter} />
            <DisplayItems
              handleFilter={handleFilter}
              filter={filter}
              setFilter={setFilter}
              items={items}
              setItems={setItems}
              category={category}
              setCategory={setCategory}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Category;
