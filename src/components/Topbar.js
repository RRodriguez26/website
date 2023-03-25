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

// import React from 'react';
// import {
//     Navbar,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText,
// } from 'reactstrap';

// function Topbar(args) {

//     return (
//         <div>
//             <Navbar {...args}>
//                 <NavbarBrand href="/">reactstrap</NavbarBrand>
//                     <Nav className="me-auto" navbar>
//                         <NavItem>
//                             <NavLink href="/components/">Components</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink href="https://github.com/reactstrap/reactstrap">
//                                 GitHub
//                             </NavLink>
//                         </NavItem>
//                         <UncontrolledDropdown nav inNavbar>
//                             <DropdownToggle nav caret>
//                                 Options
//                             </DropdownToggle>
//                             <DropdownMenu right>
//                                 <DropdownItem>Option 1</DropdownItem>
//                                 <DropdownItem>Option 2</DropdownItem>
//                                 <DropdownItem divider />
//                                 <DropdownItem>Reset</DropdownItem>
//                             </DropdownMenu>
//                         </UncontrolledDropdown>
//                     </Nav>
//                     <NavbarText>Simple Text</NavbarText>
//             </Navbar>
//         </div>
//     );
// }

// export default Topbar;