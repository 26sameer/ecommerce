import { Link } from 'react-router-dom';
import categories from '../data/categories.json';

const Categories = () => {
  return (
    <div className="wrapper">
      {categories.map(data => {
        return (
          <Link to="/category" key={data.id} className="card">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
