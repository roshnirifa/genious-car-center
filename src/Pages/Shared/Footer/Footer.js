import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <footer className='text-center fw-bold' >
                <p>Developed by Roshni Rifa</p>
                <p ><small>copyright @{(new Date().getFullYear())} </small></p>
            </footer>
        </div>
    );
};

export default Footer;