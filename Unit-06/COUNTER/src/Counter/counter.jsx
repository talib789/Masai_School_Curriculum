import React from "react";
import CounterColor from "./counterColor";

function Counter() {
  let [counter, setCounter] = React.useState(0);

  let changeNum = (value) => {
    setCounter(counter + value);
  };
  let doubleNum = (value) => {
    setCounter(counter * 2);
  };
  return (
    <div className="App">
      <h1>Counter App </h1>
      <CounterColor
        counter={counter}
        color={counter % 2 === 0 ? "green" : "red"}
      />
      <button onClick={() => changeNum(1)}>Increment</button>
      <button onClick={() => changeNum(-1)}>Decrement</button>
      <button onClick={() => doubleNum(counter)}>Double</button>
    </div>
  );
}

export default Counter;
