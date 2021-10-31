import React from 'react';
import './Header.css';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../images/logo.png';
import useAuth from './../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        // Header
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
            <Container className="align-items-end px-0">
                <Nav.Link as={Link} to="/home" className="" ><Image src={img} /></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-between" id="responsive-navbar-nav" >


                    {/* Header left */}
                    <Nav className="header-left ps-3" style={{ fontWeight: '500' }}>
                        <Nav.Link className="fs-5 mx-1" style={{ color: '#1A1A1A' }} as={Link} to="/home">Home</Nav.Link>
                        {
                            user.email ?
                                <>
                                    <Nav.Link className="fs-5 mx-1" style={{ color: '#1A1A1A' }} as={Link}
                                        to="/mybookings">My Bookings</Nav.Link>
                                    <Nav.Link className="fs-5 mx-1" style={{ color: '#1A1A1A' }} as={Link}
                                        to="/managebookings">Manage Bookings</Nav.Link>
                                    <Nav.Link className="fs-5 mx-1" style={{ color: '#1A1A1A' }} as={Link}
                                        to="/addnewpackages">Add New Package</Nav.Link>
                                </> : ''
                        }
                    </Nav>

                    {/* Header right */}
                    <Nav className=" align-items-lg-baseline header-right">
                        {
                            user.email ? <Navbar.Text className="mx-1" style={{ fontSize: '17px', color: 'rgb(80, 80, 80)' }}>{user.displayName}</Navbar.Text> : ''
                        }

                        {
                            user.email ? <Nav.Link onClick={logOut} className="mx-1" style={{ color: '#ffb606', fontWeight: '500', fontSize: '23px' }}>Logout</Nav.Link>
                                : <Nav.Link className=" mx-1" as={Link} to="/login" style={{ color: '#ffb606', fontWeight: '500', fontSize: '23px' }}>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;