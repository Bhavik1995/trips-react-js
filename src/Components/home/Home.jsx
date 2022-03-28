import React from 'react';
import './home.css';

import {BsPlayFill} from 'react-icons/bs';
import background from '../../images/hero_1.jpg';

import MovingText from 'react-moving-text'

const Home = () => {
  return (
    <>
      <div className='banner__container banner__image' style={{backgroundImage:`url(${background})` }}>
         
              {/* <h3 className='banner__text'>Let's Enjoy The Wonders of Nature</h3> */}

              <div className='banner__text'>
                  <MovingText
                          type="fadeInFromLeft"
                          duration="2000ms"
                          delay="0s"
                          direction="normal"
                          timing="ease"
                          iteration="1"
                          fillMode="none">
                           <h1>Let's Enjoy The <br/> Wonders of <br/> Nature</h1>

                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Soluta veritatis in tenetur doloremque, maiores doloribus <br/> officia iste. Dolores.</p>
                  
                          <div className='button__section'>
                            <button className='play_button'><BsPlayFill className='play_icon'/></button>
                            <p>Watch the video</p>
                          </div>
                    </MovingText>
                 
                
              </div>
      </div>
    </>
  )
}

export default Home