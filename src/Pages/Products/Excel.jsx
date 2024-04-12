import React from 'react';
import '../Products/Excel.css';
import word from '../images/Story-blade-apps_1902x700@2x_RE4slnO.jpg';
import word2 from '../images/Story-blade-apps375x275_RE4slod (1).webp';

const Excel = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 p-0">
    <div className='product'>
       <div className="product-img ">
       <img src={word} alt="" className='word img-fluid' />
       <img src={word2} alt="" className='word2 img-fluid' />
       </div>
        <div className='product-text'>
          <h2>Free access to Office<br /> apps</h2>
          <p>Collaborating is easy with Word, PowerPoint, <br />  Excel. You can chat in real time with Skype—right <br /> from your Outlook account.</p>
        </div>
    </div>

            </div>
        </div>
    </div>
  )
}

export default Excel;