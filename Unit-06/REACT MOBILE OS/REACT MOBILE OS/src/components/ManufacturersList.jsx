import React from "react";

export default function ManufacturersList(props) {
  return (
    <>
      {props.Mfgs.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </>
  );
}
