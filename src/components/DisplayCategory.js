import { NavLink } from 'react-router-dom';

const DisplayCategory = props => {
  return (
    <div className="categories">
      {props.category.map(data => {
        return (
          <NavLink key={data.id} className="items" to={`category/${data.id}`}>
            <div className=" category-item">
              <p className="item-name">{data.name}</p>
              <p className="item-description">{data.description}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DisplayCategory;
