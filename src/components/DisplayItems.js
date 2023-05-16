import { useParams } from 'react-router-dom';
import CheckOutBtn from './CheckOutBtn';

const DisplayItems = props => {
  const { categoryID } = useParams();

  return (
    <div className="inline">
      {props.items.map(data => {
        if (data.categoryId === categoryID && data.inStock) {
          return (
            <div key={data.id} className="wrapper">
              <img className="img" src={data.thumbnail} alt={data.name} />
              <p>{data.name}</p>
              <p>{data.price}</p>
              <CheckOutBtn data={data} />
            </div>
          );
        }
        if (!props.filter) {
          if (data.categoryId === categoryID) {
            if (!data.inStock) {
              return (
                <div key={data.id} className="wrapper">
                  <img className="img" src={data.thumbnail} alt={data.name} />
                  <p>{data.name}</p>
                  <p>{data.price}</p>
                  <CheckOutBtn data={data} />
                </div>
              );
            }
          }
        }
      })}
    </div>
  );
};

export default DisplayItems;
