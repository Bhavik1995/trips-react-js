import React from 'react';
import './journey.css';

import image_1 from '../../images/img_1.jpg';
import image_2 from '../../images/img_2.jpg';
import image_3 from '../../images/img_3.jpg';

import image_4 from '../../images/img_4.jpg';
import image_5 from '../../images/img_5.jpg';
import image_6 from '../../images/img_6.jpg';

import {FadeIn} from "react-lazyload-fadein";

import {Link} from 'react-router-dom';


const Journey = () => {
  return (
    <>
        <div className='journey__container section__margin'>
            <div className='journey__heading'>
                <span className='journey__heading-main'>Journey</span> 
                <span class="journey__sub-heading">Journey</span>
                <h3>Your Journey Starts Here</h3>
            </div>

          
            <div className='journey__image'>
                
                    <div className='journey-images'>      
                        <img src={image_1} alt="journey_image_1"/>
                        <div className='journey-content'>
                            <button className='button-1'><Link to="/"/>$200.00</button>
                            <h2>Dignissimos debitis</h2>
                        </div>
                    </div>

                    <div className='journey-images'>
                        <img src={image_2} alt="journey_image_2"/>

                        <div className='journey-content'>
                            <button className='button-1'><Link to="/"/>$390.00</button>
                            <h2>Consectetur adipisicing</h2>
                        </div>
                    </div>

                    <div className='journey-images'>
                        <img src={image_3} alt="journey_image_3"/>

                        <div className='journey-content'>
                            <button className='button-1'><Link to="/"/>$180.00</button>
                            <h2>Temporibus aperiam</h2>
                        </div>
                    </div>
                
            </div>
       

            <div className='journey__image'>
                <div className='journey-images'>
                    <img src={image_4} alt="journey_image_4"/>

                    <div className='journey-content'>
                        <button className='button-1'><Link to="/"/>$600.00</button>
                        <h2>Expedita fugiat</h2>
                    </div>
                </div>

                <div className='journey-images'>
                    <img src={image_5} alt="journey_image_5"/>

                    <div className='journey-content'>
                        <button className='button-1'><Link to="/"/>$330.00</button>
                        <h2>Consectetur adipisicing</h2>
                    </div>
                </div>

                <div className='journey-images'>
                    <img src={image_6} alt="journey_image_6"/>

                    <div className='journey-content'>
                        <button className='button-1'><Link to="/"/>$450.00</button>
                        <h2>Consectetur Amet</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Journey