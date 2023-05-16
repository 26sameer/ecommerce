import { NavLink } from 'react-router-dom';

const DisplayCategory = props => {
  return (
    <div className="inline">
      {props.category.map(data => {
        return (
          <div className="wrapper" key={data.id}>
            <NavLink to={`category/${data.id}`}>
              <p>{data.name}</p>
              <p>{data.description}</p>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayCategory;
