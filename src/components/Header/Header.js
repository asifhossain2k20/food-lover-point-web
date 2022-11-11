import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home" className='fw-bolder'>Food Port</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Foods</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#aboutus">About Us</Nav.Link>
                </Nav>
                </Container>
            </Navbar>            
        </div>
    );
};

export default Header;