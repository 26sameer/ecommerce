import { useParams } from 'react-router-dom';
import CheckOutBtn from './CheckOutBtn';

const DisplayItems = props => {
  const { categoryID } = useParams();

  return (
    <div className="all-items">
      {props.items.map(data => {
        if (data.categoryId === categoryID && data.inStock) {
          return (
            <div key={data.id} className="wrapper">
              <img className="img" src={data.thumbnail} alt={data.name} />
              <p className="item-name">{data.name}</p>
              <p className="item-price">
                ${data.price} {data.currency}
              </p>
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
                  <p className="item-name">{data.name}</p>
                  <p className="item-price">
                    ${data.price} {data.currency}
                  </p>
                  <button className="btn">Out Of Stock</button>
                  {/* <CheckOutBtn data={data} /> */}
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
