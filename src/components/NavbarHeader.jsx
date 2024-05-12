import React, { useState } from 'react'
import './NavbarHeader.css'
import { FaUserCircle } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Input,
    Button,
} from 'reactstrap';
import { LOGO, NOTES } from '../assets/images';


const NavbarHeader = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <div className='navbar_section'>
                <Container>
                    <Navbar {...args} expand='lg' >
                        <NavbarBrand href="/">
                            <img src={LOGO} alt="" />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="me-auto" navbar>
                                <NavItem>
                                    <NavLink>Art</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        Collectible
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        Gaming
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        Explore
                                    </NavLink>
                                </NavItem>

                            </Nav>

                            <div className='navbar_searchbar d-flex align-items-center'>
                                <LiaSearchSolid className='search_icon' />
                                <Input
                                    id="search"
                                    name="search"
                                    placeholder="Search items.."
                                    type="text"
                                />

                            </div>
                            <div className='navbar_rightSection d-flex align-items-center'>
                                <Button className='create_btn' type='button'>Cretae</Button>
                                <FaUserCircle />
                                <img src={NOTES} alt="Navbar notes png icon" />
                            </div>
                        </Collapse>
                    </Navbar>
                </Container>

            </div>
        </div>
    )
}

export default NavbarHeader