import React from 'react';
import screen from '../images/Immersive-Module-image04--x2_RE4slnH.webp';
import '../Expand-Oulook/Expand.css';
import screen2 from '../images/Immersive-Module-image_04375x275_RE4s3cM.webp';
import { MdKeyboardArrowRight  } from 'react-icons/md';

const Expand = () => {
  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-12 p-0">
<div className='ExpandOutlook'>
   <div className="ExpandOutlook-img ">
   <img src={screen} alt="" className='screen img-fluid' />
   <img src={screen2} alt="" className='screen2 img-fluid' />

   </div>
    <div className='ExpandOutlook-text'>
      <h2>Expand your Outlook</h2>
      <p>A Microsoft 365 subscription includes premium<br /> Outlook features like an ad-free interface,<br /> enhanced security, the full desktop version of<br /> Office apps, and 1 TB of cloud storage.</p>
      <a className='text-primary text-decoration-none'>Learn about Premium <MdKeyboardArrowRight  /></a>
    </div>
</div>

        </div>
    </div>
</div>
  );
};

export default Expand;