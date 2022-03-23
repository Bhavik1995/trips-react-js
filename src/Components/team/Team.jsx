import React from 'react';
import './team.css';

import {Link} from 'react-router-dom';
import person_1 from '../../images/person_1.jpg';
import person_2 from '../../images/person_2.jpg';
import person_3 from '../../images/person_3.jpg';

import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa';

const Team = () => {
  return (
    <>
        <div className='team__container section__margin'>
            <div className='team__heading'>
                    <span className='team__heading-main'>Our Team</span> 
                    <span class="team__sub-heading">Amazing Staff</span>
                    <h3>Meet our teams</h3>
            </div>

            <div className='team__image section__margin'>
                <div className='team-images'>
                    <img src={person_1} alt="team_image_1"/>

                    <div className='person_details'>
                        <h3 className='team_member_name'>John Doe</h3>
                        <h4 className='team_member_desg'>Staff</h4>
                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error</p>
                    </div>

                    <div className='social-media-links'>
                        <div className='social-media'>
                            <Link to="/"><span><FaFacebookF/></span></Link>
                        </div>

                        <div className='social-media'>
                            <Link to="/"><span><FaInstagram/></span></Link>
                        </div>

                        <div className='social-media'>
                            <Link to="/"><span><FaTwitter/></span></Link>
                        </div>
                    </div>
                </div>


                <div className='team-images'>
                    <img src={person_2} alt="team_image_2"/>

                    <div className='person_details'>
                        <h3 className='team_member_name'>Jean Doe</h3>
                        <h4 className='team_member_desg'>Staff</h4>
                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error</p>
                    </div>

                    
                    <div className='social-media-links'>
                        <div className='social-media'>
                            <Link to="/"><span><FaFacebookF/></span></Link>
                        </div>

                        <div className='social-media'>
                            <Link to="/"><span><FaInstagram/></span></Link>
                        </div>

                        <div className='social-media'>
                            <Link to="/"><span><FaTwitter/></span></Link>
                        </div>
                    </div>
                </div>

                <div className='team-images'>
                    <img src={person_3} alt="team_image_3"/>

                    <div className='person_details'>
                        <h3 className='team_member_name'>Claire Dormey</h3>
                        <h4 className='team_member_desg'>Staff</h4>
                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores? Eos alias fugit eius, repudiandae molestias error</p>
                    </div>

                    
                    <div className='social-media-links'>
                        <div className='social-media'>
                            <Link to="/"><span><FaFacebookF/></span></Link>
                        </div>

                        <div className='social-media'>
                            <Link to="/"><span><FaInstagram/></span></Link>
                        </div>

                        <div className='social-media'>
                            <Link to="/"><span><FaTwitter/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Team