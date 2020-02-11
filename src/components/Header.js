import React from "react";
import { Button, Navbar, Nav } from 'react-bootstrap';


function Header () {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "#9e4f89"}}>
        <Navbar variant="dark" style={{
            backgroundColor: "#9e4f89", textAlign: "center"
        }}>
            <Navbar.Brand href="#">Suvin Cosmetic</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link style={{minWidth: 130}} href="#Information">Information</Nav.Link>
                <Nav.Link style={{minWidth: 130}} href="#Business">Business</Nav.Link>
                <Nav.Link style={{minWidth: 130}} href="#Product">Product</Nav.Link>
                <Nav.Link style={{minWidth: 130}} href="#Global_Network">Global Network</Nav.Link>
                <Nav.Link style={{minWidth: 130}} href="#Inquiry">Inquiry</Nav.Link>
                <Nav.Link style={{minWidth: 130}} href="#Customer">Customer</Nav.Link>
            </Nav>
        </Navbar>
        </div>

    );

}

export default Header;