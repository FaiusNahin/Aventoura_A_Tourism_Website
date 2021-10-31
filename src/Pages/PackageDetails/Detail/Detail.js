import React from 'react';
import './Detail.css';

const Detail = (props) => {
    const { placeName, img, price, description, place, days, tourDate } = props.detail;

    return (
        <>
            <div className="">

                {/* Detail Image */}
                <div className="" >
                    <img className="w-100" src={img} alt="" />
                </div>

                {/* Detail Info */}
                <div className="">
                    <h3 className="detail-heading">{placeName}</h3>

                    <p className="detail-description">{description}</p>

                    <div className="d-flex flex-row flex-wrap flex-xl-nowrap justify-content-start mt-4 details-schedule">
                        <p className="me-4 fs-5"><i className="fas fa-map-marker-alt"></i> {place}</p>
                        <p className="me-4 fs-5"><i className="far fa-clock"></i> {days} Days</p>
                        <p className="me-4 fs-5"><i className="far fa-calendar-alt"></i> {tourDate}</p>
                    </div>
                    <p className="detail-price mb-5">${price}<span className="detail-pack"> / Pack</span></p>
                </div>
            </div>
        </>
    );
};

export default Detail;