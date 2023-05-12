import { useParams } from 'react-router-dom';

const DisplayItems = props => {
  const { categoryID } = useParams();

  return (
    <div>
      {props.items.map(data => {
        if (data.categoryId === categoryID) {
          return (
            <div key={data.id}>
              <div>
                <p>{data.name}</p>
                <p>{data.price}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DisplayItems;
