import React from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Topbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({ 
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
        <Navbar className="nav-color" dark="true" expand="sm">
            <Container>
                <NavbarBrand className="nav-text-color" href="/">
                    <span>Rafael Rodriguez</span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
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
                </Collapse>
            </Container>
        </Navbar>
        );
    }
}

export default Topbar;