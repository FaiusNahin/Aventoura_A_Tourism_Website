import React from 'react';
import './Footer.css';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import img from '../../../images/footer.png';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'rgb(26, 26, 26)' }}>
            <Container className="py-5">
                <Row lg={3} md={2} sm={1} className="">

                    {/* Footer Images */}
                    <Col lg={4} md={5} sm={12} className="pt-0 ">
                        <img id="footer-img" src={img} alt="" />
                    </Col>

                    {/* Quick Links */}
                    <Col lg={4} md={7} sm={12} className=" px-0">
                        <div className="row" id="quick-links">
                            <div className="col-12 col-md-6 px-0">
                                <ul className="mt-2 px-0">
                                    <li><Nav.Link className="p-0" as={HashLink} to="/home#home">HOME</Nav.Link></li>
                                    <li><Nav.Link className="p-0" as={HashLink} to="/home#packages">PACKAGES</Nav.Link></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 px-0">
                                <ul className="mt-2 px-0">
                                    <li><Nav.Link className="p-0" as={HashLink} to="/mybookings">MY BOOKINGS</Nav.Link></li>
                                    <li><Nav.Link className="p-0" as={HashLink} to="/allbookings">MANAGE ALL BOOKINGS</Nav.Link></li>
                                    <li><Nav.Link className="p-0" as={HashLink} to="/newpackages">ADD A NEW PACKAGE</Nav.Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    {/* Social Links */}
                    <Col lg={4} md={6} sm={12} className="d-flex flex-column align-items-center">
                        <div>
                            <div id="icons" className="mt-3 mb-2">
                                <a href="https://www.facebook.com/" className="me-2"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter" ></i></a>
                                <a href="https://www.youtube.com/" className="mx-2"><i className="fab fa-youtube " ></i></a>
                                <a href="https://www.linkedin.com/" className="mx-2"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <p style={{ color: 'rgb(175, 175, 175)' }}>©2021 Aventoura. All rights reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;