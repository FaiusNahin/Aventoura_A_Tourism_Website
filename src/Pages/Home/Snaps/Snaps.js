import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Snaps = () => {
    return (
        <Container className="px-4 my-5 py-4">
            {/* Sanps Heading */}
            <div className="text-center py-4">
                <h1 className="feturte-heading">Insta Snaps</h1>
                <p className="feturte-title">EXPLORE THE MOUNTAINS@<span className="fst-italic" style={{ fontFamily: 'Merriweather, serif' }}>aventoura</span></p>
            </div>
            {/* Sanps */}
            <Row lg={4} md={2} sm={1} className="my-5">

                {/* Snaps Image-1 */}
                <Col lg={3} md={6} sm={12} className="px-0">
                    <img className="w-100" src="https://i.ibb.co/yYYVXmC/snap-1.jpg" alt="" />
                </Col>

                {/* Snaps Image-2 */}
                <Col lg={3} md={6} sm={12} className="px-0">
                    <img className="w-100" src="https://i.ibb.co/3M1sPTL/snap-2.jpg" alt="" />
                </Col>

                {/* Snaps Image-3 */}
                <Col lg={3} md={6} sm={12} className="px-0">
                    <img className="w-100" src="https://i.ibb.co/0tSjkwY/snap-3.jpg" alt="" />
                </Col>

                {/* Snaps Image-4 */}
                <Col lg={3} md={6} sm={12} className="px-0">
                    <img className="w-100" src="https://i.ibb.co/Xt6F1HD/snap-4.jpg" alt="" />
                </Col>

                {/* Snaps Image-5 */}
                <Col lg={3} md={6} sm={12} className="px-0">
                    <img className="w-100" src="https://i.ibb.co/Hrhcc2V/snap-5.jpg" alt="" />
                </Col>

                {/* Snaps Image-6 */}
                <Col lg={3} md={6} sm={12} className="px-0">
                    <img className="w-100" src="https://i.ibb.co/CQdGzxx/snap-6.jpg" alt="" />
                </Col>

                {/* Snaps Image-7 */}
                <Col lg={3} md={6} sm={12} className="px-0">
                    <img className="w-100" src="https://i.ibb.co/RTZXGgB/snap-7.jpg" alt="" />
                </Col>

                {/* Snaps Image-8 */}
                <Col lg={3} md={6} sm={12} className="px-0">
                    <img className="w-100" src="https://i.ibb.co/kJkMPWQ/snap-8.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Snaps;