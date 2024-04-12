import React from 'react';
import '../Banner/Banner.css';
import Button from 'react-bootstrap/Button';
import hero from '../Banner/hero_image@2x_RE4rxpr.webp';
import { FaChevronRight } from "react-icons/fa";


const Banner = () => {
    return (
        <>
           <div className="container-fluid">
           <div className="row banner">
                <div className="col-lg-6 col-sm-12 p-5 main-banner">
                    <h1 className=' text-primary mb-4'>Microsoft Outlook</h1>
                    <h5 className='fs-3'>Connect, organize, and get things done with free personal email and calendar.</h5>
                    <div className="button flex ">
                        <button className='bg-primary me-4 text-white px-5 border-0 py-2'>Sign in</button>
                        <button className='bg-white border border-primary border-2 px-3 py-2 text-primary'>Create 
                        Free Account</button>
                    </div>
                    <a href='#' className='text-primary mt-4 fw-normal text-decoration-none'>Try premium <FaChevronRight /></a>
                </div>
                <div className="col-lg-6 col-sm-12 p-0 hero">
                    <img src={hero} alt="hero" className='img-fluid'   />
                </div>
            </div>
           </div>
        </>
    );
};

export default Banner;