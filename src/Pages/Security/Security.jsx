import React from 'react';
import '../Security/Security.css';
import data from '../images/Compare-module-image01x2_RE4s8qx.webp';
import Protection from '../images/Compare-module-image02x2_RE4s5Rh.webp';
import check from '../images/icon02x2_RE4s5QM.png';
import user from '../images/icon03x2_RE4slo2.png';
import trophy from '../images/icon04x2_RE4s8qA.png';
import equilizer from '../images/icon01x2_RE4slnt.png';
import fingerprint from '../images/icon05x2_RE4slo5.png';
import encryption from '../images/icon06x2_RE4s5Rp (1).webp';
import email from '../images/icon07x2_RE4s8qD.png';
import cloud from '../images/icon081_RE4sb3e.png';
const Security = () => {
  return (
    <>
    <div className="DataSecurity">
    <div className="security-heading d-flex justify-content-center my-5">
    <h2>Stay safe and connected with security you can trust</h2>
    </div>

    <div className="container mb-5 ">
        <div className="row d-flex justify-content-center gap-5">
            <div className="data col-lg-5 col-sm-12 p-4 pt-5">
                <h2 className='text-center'>Your data, controlled by you</h2>
                <p className='text-center'>Outlook puts you in control of your privacy.</p>
                <img src={data} alt="" className='img-fluid' />
                <div className="icon-text d-flex gap-2">
                    <img src={equilizer} alt="" />
                    <p className='d-flex justify-content-center align-items-center m-0'>We help you take charge with easy-to-use tools and clear choices.</p>
                </div>
                <div className="icon-text d-flex gap-2">
                    <img src={check} alt="" />
                    <p className='d-flex justify-content-center align-items-center m-0'>We’re transparent about data collection and use so you can make informed decisions.</p>
                </div>
                <div className="icon-text d-flex gap-2">
                    <img src={user} alt="" />
                    <p className='d-flex justify-content-center align-items-center m-0'>We don’t use your email, calendar, or other personal content to target ads to you.</p>
                </div>
                <div className="icon-text d-flex gap-2">
                    <img src={trophy} alt="" />
                    <p className='d-flex justify-content-center align-items-center m-0'>When we collect data, we use it to benefit you and make your experience better.</p>
                </div>
            </div>
            <div className="protection col-lg-5 col-sm-12 p-4 pt-5">
                <h2 className=' text-center'>Backed by enterprise-grade <br />security</h2>
                <p className='text-center'>Outlook works around the clock to help protect your data.</p>
                <img src={Protection} alt="" className='img-fluid' />
                <div className="icon-text d-flex gap-2">
                    <img src={fingerprint} alt="" />
                    <p className='d-flex justify-content-center align-items-center m-0'>Protection delivered by the same tools Microsoft uses for business customers.</p>
                </div>
                <div className="icon-text d-flex gap-2">
                    <img src={encryption} alt="" />
                    <p className='d-flex justify-content-center align-items-center m-0'>Data encryption in your mailbox and after email is sent.</p>
                </div>
                <div className="icon-text d-flex gap-2">
                    <img src={email} alt="" />
                    <p className='d-flex justify-content-center align-items-center m-0'>Automatic deactivation of unsafe links containing phishing scams, viruses, or malware. (Premium)</p>
                </div>
                <div className="icon-text d-flex gap-2">
                    <img src={cloud} alt="" />
                    <p className='d-flex justify-content-center align-items-center m-0'>Ransomware detection and recovery for your important files in OneDrive. (Premium)</p>
                </div>
            </div>
        </div>
    </div>

    </div>

    </>
  );
};

export default Security;