import React from 'react';
import './DetailsForm.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from './../../../hooks/useAuth';
import sale from '../../../images/sale.jpg';

const DetailsForm = () => {
    const { detailsId } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    // Confirm Order
    const handlePlaceOrder = data => {
        fetch(`https://ghostly-vault-49896.herokuapp.com/confirmPackage`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking Confirmed Successfully');
                    reset();
                }
            })
    };

    return (
        // Details Form
        <div className="confirm-order">
            {/* Form Heading */}
            <h6 className="text-center my-0 form-Heading">FIND YOUR TRIP</h6>

            {/* Form */}
            <form className="d-flex flex-column" style={{ backgroundColor: '#f6f6f6' }}
                onSubmit={handleSubmit(handlePlaceOrder)} >
                <input defaultValue={detailsId} style={{ display: 'none' }} {...register("orderId")} />
                <input defaultValue="Pending" style={{ display: 'none' }} {...register("status")} />

                <input className="my-4 input-field" defaultValue={user.displayName} {...register("name", { required: true })} />

                <input className="mb-4 input-field" defaultValue={user.email} {...register("email", { required: true })} />

                <input className="mb-4 input-field" placeholder="City" {...register("city", { required: true })} />

                <input className="mb-4 input-field" placeholder="Address" {...register("address", { required: true })} />

                <input className="mb-4 input-field" placeholder="Phone Number" {...register("phone", { required: true })} />

                {/* Confirm Booking Button */}
                <input className="confirm-button border-0" type="submit" value="CONFIRM BOOKING" />
            </form>
            <img className="w-100 my-5 pt-4" src={sale} alt="" />
        </div>
    );
};

export default DetailsForm;