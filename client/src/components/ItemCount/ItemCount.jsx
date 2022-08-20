import React, { useEffect, useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);
  const [error, setError] = useState(false);

  const incrementCounter = () => setCounter(counter + 1);

  const decrementCounter = () => {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
  };

  const AddtoCart = () => {
    onAdd(counter);
  };

  useEffect(() => {
    if (counter === stock) setError(true);
    else setError(false);
  }, [counter, stock, setError]);

  return (
    <div className="number-input">
      <div className="counter-input">
        <button onClick={decrementCounter} className="fas fa-minus"></button>
        <input
          className="quantity"
          name="quantity"
          value={counter}
          onChange={(event) => this.inputChangedHandler(event)}
          type="number"
        />
        <button
          onClick={incrementCounter}
          className="fas fa-plus"
          disabled={error}
        ></button>
      </div>
      <button className="addTo" onClick={AddtoCart}>
        Add to cart
      </button>
    </div>
  );
}

export default ItemCount;
