import React from 'react';

import background from '../../images/hero_1.jpg';
import './join.css';

const Join = () => {
  return (
    <>
        <div className='join__container bg-image' style={{backgroundImage:`url(${background})` }}>
            <div className='join__content'>
                <div className='join_content-center'>
                        <h2 className='join_text'>Join and Trip With Us</h2>
                        <p className='join_sub-text'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit."</p>
                        <button className='join_button'>Get in Touch</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Join