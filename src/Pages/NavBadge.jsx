import React from 'react';
import '../Pages/NavBadge.css';
import { FaChevronRight } from "react-icons/fa";

const NavBadge = () => {
  return (
    <>
   
        <div className="Nav">
            <div className="container">
            <div className="row">
              <div className="col-12">
              <p className='m-0 text-white '>Introducing Copilot for Microsoft 365—your copilot for work.
            <a href='#' className='text-white text-decoration-none ps-2 fw-bold'>Learn more <FaChevronRight />
</a>
            </p>
              </div>
            </div>
            </div>
        </div>
    </>
  );
};

export default NavBadge;