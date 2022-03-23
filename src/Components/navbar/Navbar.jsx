import React, {useState} from 'react'
import './navbar.css'

import logo from '../../images/logo.png';

import {Link} from 'react-router-dom'

const Navbar = () => {

    const [currentLink, setCurrentLink] = useState('');

    let background = {};
    switch(currentLink){
    case 'home':
     background= { backgroundColor: '#efba6c '};
     break;
    case 'about':
     background= { backgroundColor: '#efba6c'};
     break;
    case 'trips':
     background= { backgroundColor: '#efba6c'};
     break;
    case 'blog':
     background= { backgroundColor: '#efba6c' };
     break;
    case 'contact':
     background= { backgroundColor: '#efba6c'};
     break;
    default:
     background = {}
  }
  return (
    <>
        <div className='navbar__container section__margin'>
            <div className='navbar__header'>
                <img src={logo} alt={logo}/>
            </div>

            <div className='navbar__links'>
                    <Link to = "/" className="tab" onClick={() => setCurrentLink('home')}>Home</Link>
                    <Link to = "/about" className="tab" onClick={() => setCurrentLink('about')}>About</Link>
                    <Link to = "/trips" className="tab" onClick={() => setCurrentLink('trips')}>Trips</Link>
                    <Link to = "/blog" className="tab" onClick={() => setCurrentLink('blog')}>Blog</Link>
                    <Link to = "/contact" className="tab" onClick={() => setCurrentLink('contact')}>Contact</Link>      
            </div>
        </div>
    </>
  )
}

export default Navbar