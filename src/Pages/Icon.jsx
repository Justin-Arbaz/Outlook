import React from 'react';
import '../Pages/Icon.css';
const Icon = () => {
  return (
    <div className='icon gap-3 d-flex my-5 align-items-center bg-white'>
        <p className='m-0'>Follow Microsoft 365</p>
        <img src={require('../Pages/images/Facebook 2x.webp')} alt="" />
        <img src={require('../Pages/images/LinkedIn-29.webp')} alt="" />
        <img src={require('../Pages/images/Blog.webp')} alt="" />
        <img src={require('../Pages/images/Twitter-34.webp')} alt="" />

    </div>
  );
};

export default Icon;