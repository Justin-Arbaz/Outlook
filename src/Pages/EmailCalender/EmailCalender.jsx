import React from 'react';
import './EmailCalender.css';
import Button from 'react-bootstrap/Button';
import hero from '../images/Immersive-Module-image01375x275_RE4sb3t.webp';
import { FaChevronRight } from "react-icons/fa";


const EmailCalender = () => {
    return (
        <>
           <div className="container-fluid">
           <div className="row banner mt-5">
            <div className="col-lg-6 col-sm-12 hero">
                    <img src={hero} alt="hero" />
                </div>
                <div className="col-lg-6 col-sm-12 text p-0">
                    <h2 className=' text-Dark mb-4 fs-1'>Email and calendar, together in one place</h2>
                    <p>Send, receive, and manage your email. Use Outlook’s built-in calendar to keep track of appointments and events.</p>
                </div>
                
            </div>
           </div>
        </>
    );
};

export default EmailCalender;