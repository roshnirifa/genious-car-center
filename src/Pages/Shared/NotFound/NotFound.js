import React from 'react';
import img from "../NotFound/auto-mechanic-8567248c.jpg";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='text-center' >
            <h1 className='text-center text-primary'> Machanic is Sleeping.....</h1>
            <img className='img' src={img} alt="" />

        </div>
    );
};

export default NotFound;