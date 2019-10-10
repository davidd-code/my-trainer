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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/workouts">Workouts</Nav.Link>
            <Nav.Link href="/log">Log</Nav.Link>
            <Nav.Link href="/nutrition">Nutrition</Nav.Link>
            </Nav>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            <Nav.Link href="/log-in">Log In</Nav.Link>
            </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Header;
