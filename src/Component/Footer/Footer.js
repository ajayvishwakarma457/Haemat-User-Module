import React from 'react';
import './Footer.scss';

const Footer = (props) => {
    return (
        <>
            <footer>
                <p>Copyright @ {new Date().getFullYear()} Bharat Serums and Vaccines Limited <br /> Privacy Policy</p>
            </footer>
        </>
    );
};

export default Footer;