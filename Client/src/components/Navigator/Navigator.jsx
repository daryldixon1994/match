import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navigator.css"

const Navigator = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">FOOTBALLI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Join </Nav.Link>
            <Nav.Link href="#pricing">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigator