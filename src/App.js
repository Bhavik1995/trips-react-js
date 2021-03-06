import React from 'react';

import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Story from './Components/our-story/Story';
import Journey from './Components/journey/Journey';
import Team from './Components/team/Team';
import Testimony from './Components/testimony/Testimony';
import Blog from './Components/blog/Blog';
import Join from './Components/join-team/Join';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={[<Home />,<Story/>,<Journey/>,<Team/>,<Testimony/>,<Blog/>,<Join/>,<Footer/>]} />
        </Routes>
     </Router>
        
    </div>
  );
}

export default App;
