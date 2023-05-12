import { useState } from 'react';
import DisplayCategory from '../components/DisplayCategory';

function Home() {
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

  return <DisplayCategory category={category} setCategory={setCategory} />;
}

export default Home;
