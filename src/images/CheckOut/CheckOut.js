import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase_int';
import useServiceDetail from '../../Pages/hooks/useServiceDetail';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handlePlaceOrder = event => {
        event.prventDefault();
        const order = {
            name: user.name,
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://enigmatic-escarpment-13973.herokuapp.com/order', order)
            .then(response => {
                console.log(response);
            })
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='w-50 mx-auto'>
            <h3>please order: {service.name}</h3>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" name='name' placeholder='name' required readOnly />
                <br />
                <input className='w-100 mb-2' value={user?.email} type="email" name='email' placeholder='email' required readOnly />
                <br />
                <input className='w-100 mb-2' value={service.name} type="text" name='service' placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary my-4' type="submit" value="placeholder" />
            </form>
        </div>
    );
};

export default CheckOut;