import React from 'react';

import person_1 from '../../images/person_1.jpg';
import person_2 from '../../images/person_2.jpg';
import './testimony.css';

const Testimony = () => {
  return (
    <>
        <div className='testimony__container section__margin'>
            <div className='testimony__heading'>
                    <span className='testimony__heading-main'>Our testimony</span> 
                    <span class="testimony__sub-heading">Testimony</span>
                    <h3>Happy Customers</h3>
            </div>

            <div className='testimony__content'>
                <div className='testimony__details'>
                    <div className='testimony__data-image'>
                        <img src={person_1} alt="person_1"/>
                    </div>

                    <div className='testimony__data-details'>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, accusamus, facilis! Placeat praesentium alias porro aperiam facilis accusantium veniam?</h3>
                        <h4>-John Doe</h4>
                    </div>
                </div>

                <div className='testimony__details'>
                <div className='testimony__data-image'>
                        <img src={person_2} alt="person_2"/>
                    </div>

                    <div className='testimony__data-details'>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, accusamus, facilis! Placeat praesentium alias porro aperiam facilis accusantium veniam?</h3>
                        <h4>-Jean Doe</h4>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimony