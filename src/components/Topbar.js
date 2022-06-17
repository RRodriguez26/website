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
        <Navbar color="dark" dark expand="md">
            <Container>
                <NavbarBrand href="/">
                    <span>Rafael Rodriguez</span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/photography/">Photography</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/illustration/">Illustrations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/projects/">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ReadingList/">Reading List</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        );
    }
}

export default Topbar;