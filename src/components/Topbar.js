import React from 'react';
import { Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Topbar extends React.Component {
    render() {
        return (
            <Navbar className="nav-color" dark="true" expand="sm">
                <Container className="d-flex">
                <NavbarBrand className="nav-text-color" href="/">
                    <span>Rafael Rodriguez</span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-text-color" href="/photography/">Photography</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-text-color" href="/illustration/">Illustrations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-text-color" href="/projects/">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-text-color" href="/readinglist/">Reading List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-text-color" href="/blogs/">Blogs</NavLink>
                        </NavItem>
                    </Nav>
            </Container>
        </Navbar>
        );
    }
}

export default Topbar;