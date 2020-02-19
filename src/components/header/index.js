import React from 'react';
 
import { Navbar, Container } from 'rbx';
 
import "../../estilos/header.scss";

const Header = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <p className="why">Why</p><p className="food">Food?</p>
      </Navbar.Brand>
    </Container>
  </Navbar>
);
 
export default Header;