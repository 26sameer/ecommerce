const ToggleQuantity = ({ currElem, setIncrease, setDecrease }) => {
  const disableDecrement = currElem.quantity <= 1 ? true : false;

  return (
    <>
      <button disabled={disableDecrement} onClick={setDecrease}>
        -
      </button>
      <p>{currElem.quantity}</p>
      <button onClick={setIncrease}>+</button>
      <p>
        {currElem.quantity * currElem.price} {currElem.currency}
      </p>
    </>
  );
};

export default ToggleQuantity;
