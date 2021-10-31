import React from 'react';
import './Details.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';
import DetailsForm from '../DetailsForm/DetailsForm';
import { Link } from 'react-router-dom';
import usePackages from '../../../hooks/usePackages';

const Details = () => {
    const { detailsId } = useParams();
    const { packages } = usePackages();

    // Filter Id
    const bookingDetails = packages.filter(dt => (dt._id === detailsId));

    return (
        <Container>

            {/*  Back To Home Button */}
            <div className="pt-3">
                <Link to="/" className="fs-4 text-black ps-3 back-btn" style={{ fontWeight: '500' }}><i className="fas fa-long-arrow-alt-left fs-6"></i> Back</Link>
            </div>

            {/* Details */}
            <div className="py-4 my-4">
                <Row lg={2} md={1} sm={1} className="px-3" id="details">

                    {/* Details Form */}
                    < Col lg={4} md={8} sm={12} className="mx-auto order-last order-lg-first" >
                        <DetailsForm></DetailsForm>
                    </Col >

                    {/* Details */}
                    < Col lg={8} md={12} sm={12} >
                        {
                            bookingDetails.map(detail => <Detail
                                key={detail.key}
                                detail={detail}
                            ></Detail>)
                        }
                    </Col>
                </Row>
            </div>
        </Container>

    );
};

export default Details;