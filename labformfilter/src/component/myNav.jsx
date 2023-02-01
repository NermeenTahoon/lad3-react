import React from 'react';
import { Container , Navbar ,Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
export default function MyNav() {
  return (
    <Navbar className="myNav bg-secondary" expand="lg" >
    <Container className="navbar-dark">
      <Navbar.Brand href="#form">Form&Filter</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to="form">Form</NavLink>
          <NavLink className="nav-link" to="filter">Filter</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
