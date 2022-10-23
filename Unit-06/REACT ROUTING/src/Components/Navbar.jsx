import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: black;
  color: white;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/allproducts">All PRODUCTS</StyledLink>
    </NavbarWrapper>
  );
};

export default Navbar;
