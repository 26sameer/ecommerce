const ToggleQuantity = ({ currElem, setIncrease, setDecrease }) => {
  const disableDecrement = currElem.quantity <= 1 ? true : false;

  return (
    <>
      <div className="item-qty">
        <button
          className="btn btn-secondary"
          disabled={disableDecrement}
          onClick={setDecrease}
        >
          -
        </button>
        <p>{currElem.quantity}</p>
        <button className="btn btn-secondary" onClick={setIncrease}>
          +
        </button>
      </div>
      <p className="item-price">
        ${currElem.quantity * currElem.price} {currElem.currency}
      </p>
    </>
  );
};

export default ToggleQuantity;
