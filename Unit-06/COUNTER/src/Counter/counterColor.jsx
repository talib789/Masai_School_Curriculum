import React from "react";

function CounterColor({ counter, color }) {
  return (
    <div>
      <h2 style={{ color }}>{`${counter}`}</h2>
    </div>
  );
}
export default CounterColor;
