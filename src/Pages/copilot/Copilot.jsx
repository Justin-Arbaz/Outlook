import React from 'react';
import '../copilot/Copilot.css';
import Button from 'react-bootstrap/Button';
import hero from '../images/copilot_outlook_1920x1080.webp';
import { FaChevronRight } from "react-icons/fa";


const Copilot = () => {
    return (
        <>
            <div className="container-fluid">
            <div className="row banner">
                <div className="col-lg-6 col-sm-12 text p-5 ">
                    <h2 className=' text-Dark fs-1'>Copilot in Outlook</h2>
                    <p>Stay on top of your inbox, manage your meeting follow-ups, and create impactful communication in a fraction of the time. Get it now when you add Copilot Pro or Copilot for Microsoft 365 to your Microsoft 365 subscription.</p>
                    
                    <a href='#' className='text-primary mt-4 fw-bold text-decoration-none'>Learn what’s possible with Copilot<FaChevronRight /></a>
                </div>
                <div className="col-lg-6 col-sm-12 hero p-0">
                    <img src={hero} alt="hero" className='img-fluid' />
                </div>
            </div>
            </div>
        </>
    );
};

export default Copilot;