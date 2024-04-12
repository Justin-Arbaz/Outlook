import React from 'react';
import '../Footer/Footer.css';
import { FaGlobeAmericas } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-sm-12">
                        <ul className='list-group text-decoration-none list-unstyled'>
                            <li className='list-heading'>What's new</li>
                            <li className='list-text'>Games</li>
                            <li className='list-text'>Surface Pro 9</li>
                            <li className='list-text'>Surface Laptop 5</li>
                            <li className='list-text'>Surface Laptop Go 2</li>
                            <li className='list-text'>Microsoft Copilot</li>
                            <li className='list-text'>Microsoft 365</li>
                            <li className='list-text'>Windows 11 apps</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <ul className='list-group text-decoration-none list-unstyled'>
                            <li className='list-heading'>Microsoft Store</li>
                            <li className='list-text'>Account profile</li>
                            <li className='list-text'>Download Center</li>
                            <li className='list-text'>Microsoft Store Support</li>
                            <li className='list-text'>Returns</li>
                            <li className='list-text'>Order tracking</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <ul className='list-group text-decoration-none list-unstyled'>
                            <li className='list-heading'>Education</li>
                            <li className='list-text'>Microsoft in education</li>
                            <li className='list-text'>Devices for education</li>
                            <li className='list-text'>Microsoft Teams for Education</li>
                            <li className='list-text'>Microsoft 365 Education</li>
                            <li className='list-text'>Office Education</li>
                            <li className='list-text'>Educator training and development</li>
                            <li className='list-text'>Deals for students and parents</li>
                            <li className='list-text'>Azure for students</li>

                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <ul className='list-group text-decoration-none list-unstyled'>
                            <li className='list-heading'>Business</li>
                            <li className='list-text'>Microsoft Cloud</li>
                            <li className='list-text'>Microsoft Security</li>
                            <li className='list-text'>Azure</li>
                            <li className='list-text'>Dynamics 365</li>
                            <li className='list-text'>Microsoft 365</li>
                            <li className='list-text'>Microsoft Advertising</li>
                            <li className='list-text'>Copilot for Microsoft 365</li>
                            <li className='list-text'>Microsoft Teams</li>

                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <ul className='list-group text-decoration-none list-unstyled'>
                            <li className='list-heading'>Developer & IT</li>
                            <li className='list-text'>Developer Center</li>
                            <li className='list-text'>Documentation</li>
                            <li className='list-text'>Microsoft Learn</li>
                            <li className='list-text'>Microsoft Tech Community</li>
                            <li className='list-text'>Azure Marketplace</li>
                            <li className='list-text'>AppSource</li>
                            <li className='list-text'>Microsoft Power Platform</li>
                            <li className='list-text'>Visual Studio</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <ul className='list-group text-decoration-none list-unstyled'>
                            <li className='list-heading'>Company</li>
                            <li className='list-text'>Careers</li>
                            <li className='list-text'>About Microsoft</li>
                            <li className='list-text'>Company news</li>
                            <li className='list-text'>Privacy at Microsoft</li>
                            <li className='list-text'>Investors</li>
                            <li className='list-text'>Security</li>
                            <li className='list-text'>Sustainability</li>
                        </ul>
                    </div>
                </div>
                <div className="row d-flex justify-content-space-between pt-5">
                    <div className="col-lg-6 col-sm-12 list-text d-flex gap-4">
                        <p className=''><FaGlobeAmericas /><span className='ps-1'>English</span></p>
                        <p>Your Privacy Choices</p>
                        <p>Consumer Health Privacy</p>
                    </div>
                    <div className="col-lg-6 col-sm-12 d-flex list-text gap-4 justify-content-end">
                        <p>Contact</p>
                        <p>Microsoft</p>
                        <p>Privacy</p>
                        <p>Terms of use</p>
                        <p>Trademarks</p>
                        <p>About our ads</p>
                        <p> © Microsoft 2024</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;