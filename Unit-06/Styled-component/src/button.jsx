import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  font-size: large;
  cursor: pointer;
  padding: 10px;
  margin: 20px;
  border: ${(props) => (props.border ? props.border : "none")};
`;

export default function Buttondiv() {
  return (
    <>
      <Button color="white" backgroundColor="blue" border="none">
        Primary Button
      </Button>
      <Button color="black" border="2px solid black">
        Default Button
      </Button>
      <Button color="black" border="2px dashed black">
        Dashed Button
      </Button>
      <Button color="black">Text Button</Button>
      <Button color="blue">Link Button</Button>
    </>
  );
}
