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
            <div className='aboutme-description'>
              <h3>About Me</h3>
              <p>
              A passionate software developer and a graduate of Coding Dojo. 
              I enjoy tackling challenging projects and thrive in collaborative environments where I can leverage my problem-solving abilities to create elegant and efficient solutions. 
              Throughout my journey as a developer, I have worked on diverse projects that have enhanced my ability to adapt to new technologies and work effectively within cross-functional teams.
              As a lifelong learner, I embrace challenges and continuously seek to enhance my abilities to build robust and user-friendly applications.
              </p>
            </div>
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