import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <footer >
                <p className='text-center fw-bold'><small>copyright @{(new Date().getFullYear())} </small></p>
            </footer>
        </div>
    );
};

export default Footer;