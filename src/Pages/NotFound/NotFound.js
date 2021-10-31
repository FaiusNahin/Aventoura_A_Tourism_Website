import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="text-center my-5" >
            {/* NotFound Images */}
            <img id="notfound-img" src={img} alt="" />
            <br />
            {/* Back To Home Button*/}
            <Link to="/"><button className="my-5 px-5 py-2 rounded fs-5 back-button" >Go To Home</button></Link>
        </div>
    );
};

export default NotFound;