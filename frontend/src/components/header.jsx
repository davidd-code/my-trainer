import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">my-trainer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Workouts</Nav.Link>
            <Nav.Link href="#link">Log</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            <Nav.Link href="/log-in">Log In</Nav.Link>
            </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Header;
