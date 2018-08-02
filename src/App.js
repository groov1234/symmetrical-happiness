import React, { Component } from 'react';

import Navi from './components/navigation/navi.js'
import Home from './components/home/home.js'
import About from './components/about/about.js'
import Skills from './components/skills/skills.js'
import Resume from './components/resume/resume.js'
import Contact from './components/contact/contact.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi/>
        <Home/>
        <About/>
        <Skills/>
        <Resume/>
        <Contact/>
      </div>
    );
  }
}

export default App;
