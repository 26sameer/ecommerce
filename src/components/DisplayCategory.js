import { Link } from 'react-router-dom';

const DisplayCategory = props => {
  return (
    <div>
      {props.category.map(data => {
        return (
          <div key={data.id}>
            <Link to={`category/${data.id}`}>
              <p>{data.name}</p>
              <p>{data.description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayCategory;
