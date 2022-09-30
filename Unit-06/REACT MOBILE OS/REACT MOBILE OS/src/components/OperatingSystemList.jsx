import React from "react";

export default function OperatingSystemList(props) {
  return (
    <>
      {props.OSList.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </>
  );
}
