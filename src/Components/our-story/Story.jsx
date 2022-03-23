import React from 'react';
import './story.css';

import travel_image from '../../images/traveler.jpg';

const Story = () => {
  return (
    <>
        <div className='story__container section__padding'>
            <div className='story__content'>
                <span className='story__heading'>Story</span>
                <span className='story__discover'>Discover Story</span>
                <h3>Our Story</h3>
                <p className='story__detail-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.</p>
                <p className='story__detail-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis enim a pariatur molestiae.</p>
            </div>

           
           <div className='story__image'>
               <img src={travel_image} alt="story_image"/>
           </div>
        </div>
    </>
  )
}

export default Story