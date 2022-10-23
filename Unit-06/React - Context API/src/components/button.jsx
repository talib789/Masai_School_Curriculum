import styled from "styled-components"

export const Button = styled.button`
background-color: ${(props) => {
    return props.bgcolor;
  }};
  color: ${(props) => {
    return props.color;
  }};
  border: ${(props) => {
    return props.border;
  }};
 
  padding: 5px 15px;
  margin: 0px 10px;
  border-radius: 4px;
`