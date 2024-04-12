import React from 'react';
import '../Mobile/Mobile.css';

const Mobile = () => {
  return (

   <div className="mobile">
     <div className="container-fluid">
        <div className="row">
           <div className="col-lg-4 col-sm-0"></div>
           <div className=" col-lg-4 col-sm-12 justify-content-center d-flex align-items-center flex-column">
                <img src={require("../images/RE4pZzC_RWxpg8 (1).webp")} alt="" className='img-fluid' />
                <h2 className='pb-5'>Get the Outlook mobile app*</h2>
                <img src={require("../images/outlook-qrcode (1).webp")} alt="" className='img-fluid' />
                <p><a href="">Click</a> here if you're having trouble with the QR code</p>
                <p className='pt-4'>* Availability of mobile apps varies by country/region.</p>
            </div>
           <div className="col-lg-4 col-sm-0"></div>
        </div>
    </div>
   </div>
  );
};

export default Mobile;