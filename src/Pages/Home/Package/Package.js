import React from 'react';
import { Col } from 'react-bootstrap';
import './Package.css'
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { _id, placeName, img, price, description, place, days, tourDate } = props.bestPackage

    return (
        <>
            <Col lg={4} md={6} sm={12} className="">
                <div className="bg-white" style={{ boxShadow: '0 0 20px 0 rgb(62 28 131/13%)' }}>

                    {/* Package Image */}
                    <div className="package-img overflow-hidden" >
                        <img className="w-100 package-thumb inline" src={img} alt="" />
                    </div>

                    {/* Package Info */}
                    <div className="px-4 py-3">
                        <h5 className="place-name mt-3">{placeName?.toUpperCase()}</h5>

                        <p className="place-description">{description?.slice(0, 45)}</p>

                        <div className="d-flex flex-row flex-wrap flex-xl-nowrap justify-content-between my-4" id="package-schedule">
                            <p><i className="fas fa-map-marker-alt"></i> {place}</p>
                            <p><i className="far fa-clock"></i> {days} Days</p>
                            <p><i className="far fa-calendar-alt"></i> {tourDate}</p>
                        </div>

                        <div className="d-flex justify-content-between align-items-baseline">
                            <p id="package-price">${price}
                                <span className="pack"> / Pack</span></p>

                            <Link to={`/details/${_id}`}><button className="book-now-button">BOOk NOW</button></Link>
                        </div>

                    </div>
                </div>

            </Col>
        </>
    );
};

export default Package;