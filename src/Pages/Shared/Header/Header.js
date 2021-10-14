import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/home">Genius Car Mechanic</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                    {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    {
                    user?.displayName && <Navbar.Text>
                        Signed in as: <a href="#login">{user.displayName}</a>
                    </Navbar.Text>
                    }
                </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    );
};

export default Header;