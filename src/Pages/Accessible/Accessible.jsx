import React from 'react';
import '../Accessible/Accessible.css';
import lady from '../images/Immersive-Module-image03x2_RE4slnK.webp';
import lady2 from '../images/Immersive-Module-image03375x275_RE4sdyI.webp';


const Accessible = () => {
  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-12 p-0">
<div className='access'>
   <div className="access-img ">
   <img src={lady} alt="" className='lady img-fluid' />
   <img src={lady2} alt="" className='lady2 img-fluid' />
   </div>
    <div className='access-text'>
      <p className='h1'>More accessible than <br /> ever</p>
      <p>We’ve designed Outlook to be everyone’s most<br /> accessible inbox, with intuitive, voice-controlled <br />navigation, support for multiple assistive devices,<br />and more.</p>
    </div>
</div>

        </div>
    </div>
</div>
  );
};

export default Accessible