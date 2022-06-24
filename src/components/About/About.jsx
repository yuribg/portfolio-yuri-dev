import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/yoga_dev.gif";
function About() {
  return (
    <div className='section-container'>
      <Header 
        heading="About Me"
        subHeading="Full Stack Developer | Designer">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
            <h3 className='about-sub-heading'>Developer</h3>
            <p className='about-sub-heading-details'>
              I put all the knowledge and experience I have acquired into the purpose of turning myself and the world for the better. I search for the most efficient solution for the necessities that arise, and I am able to quickly learn any technology and language needed.
            </p>
            <h3 className='about-sub-heading'>Designer</h3>
            <p className='about-sub-heading-details'>
              I believe that for something to be Good, it has to be Truthful and Beautiful. I learned it from Plato, the ancient greek Philosopher. My quest for perfection on my work and all I create relies on those sacred virtues from nature: Goodness, Truth and Beauty.
            </p>
        </div>
        <div className='about-main-right'>
            <img 
                src={aboutAnime}
                alt="about-anime"
                className="about-anime"
            />
        </div>
      </div>
      <Footer 
        phrase="Check out my "
        link="projects!"
        toAddress="/projects">
      </Footer>
      <div className='vector-frame'>
        <img src={aboutVector}
          alt="about"
          className='about-vector'
        />
      </div>
    </div>
  )
}

export default About