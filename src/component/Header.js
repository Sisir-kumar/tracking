import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar";
import avatar from '../logo/profile.svg'
import logo from '../logo/logo.svg'
function Header() {
    return (
        <div className="row">
            <Navbar bg="light" variant="light" className="flex-grow-1">
                <Navbar.Brand href="#home" className="ml-5">
                    <img src={logo} alt="logo" width="40" />
                    <span className="ml-2">intugine</span>
                </Navbar.Brand>
                <Nav className="justify-content-end menuItems flex-row flex-grow-1" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1">Brands</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2">Transporters</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-3" >
                        <img src={avatar} alt="profile" />
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
