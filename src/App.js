import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import NoMatch from './pages/NoMatch';
import { useState } from 'react';

function App() {
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
    },
  ]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home category={category} setCategory={setCategory} />}
        />
        <Route
          path="/category/:categoryID"
          element={
            <Category
              category={category}
              setCategory={setCategory}
              items={items}
              setItems={setItems}
            />
          }
        />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
