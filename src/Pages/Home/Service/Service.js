import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'



const Service = ({ service }) => {

    const { name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = name => {
        navigate(`/service/${name}`)

    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(name)}>Book: {name}</button>
        </div>
    );
};

export default Service;