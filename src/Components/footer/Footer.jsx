import React from 'react';
import './footer.css';

import instagram_1 from '../../images/insta_1.jpg';
import instagram_2 from '../../images/insta_2.jpg';
import instagram_3 from '../../images/insta_3.jpg';
import instagram_4 from '../../images/insta_4.jpg';
import instagram_5 from '../../images/insta_5.jpg';
import instagram_6 from '../../images/insta_6.jpg';

import {AiFillHeart} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
        <div className='footer__container'>
            <div className='footer__content'>
                <div className='footer__instagram'>
                    <h3>Instagram</h3>

                    <div className='footer-instagram-img'>
                        <img src={instagram_1} alt='instagram_1'/>

                        <img src={instagram_2} alt='instagram_2'/>

                        <img src={instagram_3} alt='instagram_3'/>
                    </div>

                    <div className='footer-instagram-img'>
                        <img src={instagram_4} alt='instagram_4'/>

                        <img src={instagram_5} alt='instagram_5'/>

                        <img src={instagram_6} alt='instagram_6'/>
                    </div>
                </div>

                <div className='footer__links'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Testimonials</li>
                        <li>Terms of Service</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className='footer__email'>
                    <h3>Newsletter</h3>

                    <div className='footer_email-detail'>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odio iure animi ullam quam, deleniti rem!</h4>

                        <input type="email" placeholder='Email' className='email_data'/>

                        <button className='email_button'>Send</button>

                        <p>Made <AiFillHeart className='heart-icon'/> with Bhavik Sejpal</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer