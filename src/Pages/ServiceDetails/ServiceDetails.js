import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../hooks/useServiceDetail';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div>
            <h2>your are about to book: {service.name}</h2>
            <div className="text-center">

                <Link to={`/checkout`}><button className='btn btn-primary my-5'>Proceed checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;