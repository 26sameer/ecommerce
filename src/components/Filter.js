import { useParams } from 'react-router-dom';

const Filter = props => {
  const { categoryID } = useParams();

  const productName = categoryID === 'fgsa2142fa' ? 'Keyboards' : 'Headphones';

  return (
    <>
      <div>Filter {productName}</div>
      <input type="checkbox" onClick={props.handleFilter}></input>
      <label>Include Out of Stock</label>
    </>
  );
};

export default Filter;
