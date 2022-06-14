import React from 'react';
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <div>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/Projects">Projects</Link>
//             </li>
//             <li>
//                 <Link to="/Photography">Photography</Link>
//             </li>
//             <li>
//                 <Link to="/Illustration">Illustration</Link>
//             </li>
//             <li>
//                 <Link to="/ReadingList">Reading List</Link>
//             </li>
//         </div>
//     );
// }

// export default Navbar;
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        );
    }
}

export default Topbar;