import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import auth from '../../../firebase_int';

import logo from '../../../images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/"><img src={logo} height='30px'></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                <Nav.Link as={Link} to="/experts">Experts</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/checkout" >Checkout</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/about" >About</Nav.Link>
                                {
                                    user ? <Nav.Link onClick={handleSignOut} as={Link} to="/checkout" >Signout</Nav.Link>
                                        :
                                        <Nav.Link as={Link} to="/login">
                                            Login
                                        </Nav.Link>}
                                <p> {user && user.email}</p>

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    );
};

export default Header;