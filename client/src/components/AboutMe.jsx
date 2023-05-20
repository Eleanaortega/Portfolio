import React from 'react'
import photoshootImage from '../imgs/photoshoot.jpg';
import { TypeAnimation } from 'react-type-animation';
import '../App.css';


const AboutMe = () => {
  return (
    <div className='aboutme' >
        <img className="profile-picture" src={photoshootImage} alt="React Image" />
        <div className='right-about'>
        <h1>Eleana Ortega</h1>
            <h2>Full-Stack Developer</h2>
            <h3>About Me</h3>
            <p>Seeking a software developer position where I can apply my great communication skills 
                and knowledge to develop high-quality software solutions. I am eager to contribute to a 
                dynamic team and continue to learn and grow as a developer. My goal is to build innovative software 
                applications that meet the needs of users while utilizing the latest technologies and best practices in the industry.
            </p>
        </div>
    </div>
  )
}

export default AboutMe