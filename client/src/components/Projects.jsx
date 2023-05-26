import React from 'react'

const Projects = () => {

  return (
    <div className='projects'>
        <h2 id="projects-title">PROJECTS</h2>
        <div className='projects-card'>
            <div className="card text-black" style={{width: 25 + 'rem', height: 30 + 'rem', transition: 'transform 0.3s' }} >
                <img src={require("../imgs/Screenshot 2023-05-25 at 8.47.10 PM.png")} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">ChatMe</h5>
                    <p className="card-text">A messaging app that allows you to connect with other users in real time.</p>
                    <br></br>
                    <h5>React | MongoDB | Chakara UI</h5>
                    <a href="https://drive.google.com/file/d/1u1K-M7agnMnahJ3FFr5kr_lFXTSkPUvB/view?usp=sharing" className="btn btn-primary">DEMO</a>
                </div>
            </div>
            <div className="card text-black" style={{width: 25 + 'rem', height: 30 + 'rem', transition: 'transform 0.3s'}} >
                <img src={require("../imgs/Screenshot 2023-05-25 at 8.47.41 PM.png")} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Good Eats</h5>
                    <p className="card-text">A Yelp inspired application, designed to facilitate a seamless search experience for users looking to dine.</p>
                    <h5>React | MongoDB | Bootstrap</h5>
                    <a href="https://drive.google.com/file/d/1OZ8D3l1f7XqNRV3c-SDvHkD4kFC0M48r/view?usp=sharing" className="btn btn-primary">DEMO</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects