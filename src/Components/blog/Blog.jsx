import React from 'react';
import './blog.css';

import image_1 from '../../images/img_1.jpg';
import image_2 from '../../images/img_2.jpg';
import image_3 from '../../images/img_3.jpg';


const Blog = () => {
  return (
    <>
        <div className='blog__container section__margin'>
        <div className='blog__heading'>
                    <span className='blog__heading-main'>Blog</span> 
                    <span class="blog__sub-heading">Updates</span>
                    <h3>Our Blog</h3>
            </div>

            <div className='blog__image'>
                <div className='blog-images'>
                    <img src={image_1} alt="blog_image_1"/>

                    <div className='blog-content'>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <h3>July 17, 2019 by <span>Admin</span></h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                    </div>
                </div>

                <div className='blog-images'>
                    <img src={image_2} alt="blog_image_2"/>

                    <div className='blog-content'>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <h3>July 17, 2019 by <span>Admin</span></h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                    </div>
                </div>

                <div className='blog-images'>
                    <img src={image_3} alt="blog_image_3"/>

                    <div className='blog-content'>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <h3>July 17, 2019 by <span>Admin</span></h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Blog