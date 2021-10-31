import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddNewPackage.css';
import img from '../../images/addpackage.jpg';

const AddNewPackage = () => {
    const { register, handleSubmit, reset } = useForm();


    const handleAddPackage = data => {
        fetch(`https://ghostly-vault-49896.herokuapp.com/packages`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Package Added successfully!!!');
                    reset();
                }
            })
    };

    return (
        <Container>
            <Row lg={2} md={1} sm={1} className="my-4">
                {/* Form */}
                <Col lg={6} md={12} sm={12} className="py-5" id="package-form">

                    {/* Add New Package Heading */}
                    <h2 id="new-package-heading" className="px-5 mb-0">ADD A NEW <span>PACKAGE</span></h2>

                    {/* Add Package Form */}
                    <form id="add-package-form" className="d-flex flex-column px-5 py-2" onSubmit={handleSubmit(handleAddPackage)}>

                        <input className="add-package-input"  {...register("placeName", { required: true, maxLength: 20 })} placeholder="Place Name" />

                        <div className="d-flex flex-column flex-md-row justify-content-between two-input-group">
                            <input className="add-package-input" {...register("place", { required: true, maxLength: 20 })} placeholder="Country" />
                            <input className="add-package-input" type="text" {...register("price", { required: true })} placeholder="Price" />
                        </div>

                        <input className="add-package-input" {...register("img", { required: true })} placeholder="Image Link" />

                        <div className="d-flex flex-column flex-md-row justify-content-between two-input-group">
                            <input className="add-package-input" type="text" {...register("days", { required: true })} placeholder="How many days you stay?" />
                            <input className="add-package-input" type="text" {...register("tourDate", { required: true })} placeholder="Month Date, Year (March 5, 2021)" />
                        </div>

                        <div className="d-flex flex-column flex-md-row justify-content-between two-input-group">
                            <input className="add-package-input" type="text" {...register("shortDate", { required: true })} placeholder="Short Date (25)" />
                            <input className="add-package-input" type="text" {...register("shortMonth", { required: true })} placeholder="Short Month (Feb)" />
                        </div>

                        <textarea rows="4" {...register("description", { required: true })} placeholder="Description" />
                        {/* Add Button */}
                        <input id="add-package-button" type="submit" value="ADD  PACKAGE" />
                    </form>
                </Col>
                <Col lg={6} md={12} sm={12} className="my-auto order-first order-lg-last px-4" >
                    <img className="w-100" src={img} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default AddNewPackage;