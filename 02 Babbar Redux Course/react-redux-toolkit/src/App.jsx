import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleIncrementBy() {
    dispatch(incrementByAmount(amount));
  }

  function handleResetClick() {
    dispatch(reset());
  }

  return (
    <div>
      <button onClick={handleIncrementClick}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleResetClick}>Reset</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleIncrementBy}>Increment By</button>
    </div>
  );
}

export default App;
