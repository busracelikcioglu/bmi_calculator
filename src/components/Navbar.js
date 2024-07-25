import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">BMI Hesapla</NavLink>
      <NavLink to="/about-bmi">BMI Nedir?</NavLink>
      <NavLink to="/calculations">Tüm Kullanıcılar</NavLink>
    </Nav>
  );
};

export default Navbar
