import React from 'react';
import '../styles/global.css';
import { FiFacebook } from "react-icons/fi";
import { RiTelegram2Line } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";





function Footer() {
  return(
    <div className="footer">
        <div className='footer-box-1'>
            <div>
                <h1 className='subscribe-heading'>SUBSCRIBE</h1>
            </div>
            <div>
                <div>
                    <input placeholder='Enter your Email address' className='subscribe-input'/>
                    <button className='subscribe-button'>Subscribe</button>
                </div>
                <div>
                    <p className='subscribe-para'>Subscribe to stay tuned for new and latest updates. Let's do it!</p>
                </div>
            </div>
        </div>
        <div className='footer-box-2'>
            <div className='footer-image-container'>
                <img className='footer-image' src="/assets/footer-logo.png" alt="Footer Logo" />
                <p>Follow Us</p>
                <div className='footer-icons'>
                <FiFacebook />
                <RiTelegram2Line />
                <FiTwitter />
                <FaInstagram />
                </div>
            </div>
            <div className='footer-sub-containers'>
                <h1>Products</h1>
                <div class="underline"></div>
                <p>Helmets</p>
                <p>Gears</p>
                <p>Accessories</p>
                <p>Shoes</p>
                <p>Women</p>
            </div>
            <div className='footer-sub-containers'>
                <h1>Useful links</h1>
                <div class="underline"></div>
                <p>Community</p>
                <p>Offers</p>
                <p>Participate</p>
                <p>Referrence</p>
            </div>
            <div className='footer-sub-containers'>
                <h1>Company</h1>
                <div class="underline"></div>
                <p>About Us</p>
                <p>Careers</p>
                <p>FAQs</p>
                <p>Teams</p>
                <p>Contact Us</p>
            </div>
            <div className='footer-sub-containers'>
                <h1>Contact Us</h1>
                <div class="underline"></div>
                <div className='contact-us-container'>
                    <IoLocationOutline size={20} style={{ margin: '10px' }} />
                    <p>Beside jayabheri, nakkavanipalem, visakhapatnam, 530024</p>
                </div>
                <div className='contact-us-container'>
                    <CiMail size={20} style={{ margin: '10px' }} />
                    <p>info@bikershub</p>
                </div>
                <div className='contact-us-container'>
                    <LuPhoneCall size={20} style={{ margin: '10px' }} />
                    <p>+1 800 854-36-80</p>
                </div>
            </div>
        </div>
        <div className='footer-box-3'>
            <p>2024 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;
