import React from 'react';
import Home from './section/Home';
import SideBar from './components/SideBar';
import About from './section/About';
import Projects from './section/Projects';
function App() {

  return (
    <div className="-scroll-smooth">
        <SideBar />
        <Home />
      < About />
      < Projects />
    </div>

  )
}

export default App
