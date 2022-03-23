import React from 'react';
import './home.css';

import {BsPlayFill} from 'react-icons/bs';


import banner_img from '../../images/hero_1.jpg'

const Home = () => {
  return (
    <>
      <div className='banner__container'>
          <div className='banner__image'>
              <img src={banner_img} alt="banner_image"/>
              {/* <h3 className='banner__text'>Let's Enjoy The Wonders of Nature</h3> */}

              <div className='banner__text'>
                  <h1>Let's Enjoy The <br/> Wonders of <br/> Nature</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Soluta veritatis in tenetur doloremque, maiores doloribus <br/> officia iste. Dolores.</p>
                  
                  <div className='button__section'>
                    <button className='play_button'><BsPlayFill className='play_icon'/></button>
                    <p>Watch the video</p>
                  </div>
              </div>
          </div>


      </div>
    </>
  )
}

export default Home