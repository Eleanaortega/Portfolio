import React from 'react'
import photoshootImage from '../imgs/photoshoot.jpg';
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
            <button class="btn custom-btn">
              <a href="https://docs.google.com/document/d/1izLFg0ChBzYu0nFruLU4W1-3u8i6H_NWS7SfZiozEE4/edit">
              RESUME
              </a>
            </button>
        </div>
        <div className='aboutMe-icons'>
          <a href="https://www.linkedin.com/in/eleana-ortega-361178200/">
            <img src={require('../imgs/LinkedIn_logo_initials.png')} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Eleanaortega">
            <img src={require('../imgs/github.png')} alt="GitHub" />
          </a>
        </div>
    </div>
  )
}

export default AboutMe