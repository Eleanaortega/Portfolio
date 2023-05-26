import React from 'react'
import AboutMe from './components/AboutMe'
import Icons from './components/Icons'
import Nav from './components/Nav'
import Projects from './components/Projects'

const App = () => {
  return (
    <div>
      <Nav/>
      <AboutMe/>
      <Icons/>
      <Projects/>
    </div>
  )
}

export default App