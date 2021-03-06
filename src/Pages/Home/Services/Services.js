import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-escarpment-13973.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <h1 className='services-title m-5 text-primary'>Our Services:{services.length} </h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >

                    </Service>)
                }
            </div>
        </div >
    );
};

export default Services;