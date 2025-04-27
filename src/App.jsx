import React from 'react';
import Home from './section/Home';
import SideBar from './components/SideBar';
import About from './section/About';
import Projects from './section/Projects';
import Contact from './section/Contact';

function App() {

  return (
    <div className="-scroll-smooth">
        <SideBar />
        <Home />
      < About />
      < Projects />
      < Contact />
    </div>

  )
}

export default App
