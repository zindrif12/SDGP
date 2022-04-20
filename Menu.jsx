import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
      Log In To StockX
    </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Menu
