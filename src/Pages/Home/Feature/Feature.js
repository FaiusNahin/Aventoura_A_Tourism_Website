import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Feature.css';

const Feature = () => {
    return (
        // Feature
        <Container className="my-5 py-5">
            {/* Feature Heading */}
            <div className="text-center py-4">
                <h1 className="feturte-heading">Explore. Save. Share</h1>
                <p className="feturte-title">PLAN YOUR DREAM VACATION.</p>
            </div>

            <Row lg={3} md={2} sm={1} className="my-4">
                {/* Feature Info-1 */}
                <Col lg={4} md={6} sm={12} className="d-flex flex-column align-items-center feature-info">
                    <p className="feature-icons"><img src="https://img.icons8.com/ios/50/000000/bicycle.png" alt="" /></p>
                    <h5 className="fw-bold my-4">EXCLUSIVE PACKAGE</h5>
                    <p className="feature-description">Easily offer your exclusive packages or promote your special promotions from adventure packages to special honeymoon packages with just a few image and text modifications.</p>
                </Col>

                {/* Feature Info-2 */}
                <Col lg={4} md={6} sm={12} className="d-flex flex-column align-items-center feature-info">
                    <p className="feature-icons"><img src="https://img.icons8.com/ios/50/000000/airport.png" alt="" /></p>
                    <h5 className="fw-bold my-4">PEACE OF MIND</h5>
                    <p className="feature-description">Quick travel is very easy to customize html landing page which will help you launch your special holiday landing pages in matter of minutes.</p>
                </Col>

                {/* Feature Info-3 */}
                <Col lg={4} md={6} sm={12} className="d-flex flex-column align-items-center feature-info">
                    <p className="feature-icons"><img src="https://img.icons8.com/ios/50/000000/map.png" alt="" /></p>
                    <h5 className="fw-bold my-4">BEST TRAVEL GUIDE
                    </h5>
                    <p className="feature-description">Either you are trageting single travel planners or group travel planners, Quick travel can work for both!</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Feature;