import React from 'react'
import "./Skills.css";
import Header from "./../Header/Header.jsx";
import Footer from "./../Footer/Footer.jsx";
import skillsVector from "./../../assets/skills_vector.png";
import {skillList} from "./../../assets/skillsData";
import SkillCard from "./SkillCard.jsx";
function Skills() {
  return (
    <div className='section-container'>
      <Header
        heading="My Skills."
        subHeading="I am always ready to learn new technologies, new ways to solve problems.
        Here are the technologies I have already worked with!"></Header>
      <div className='skill-card-container'>
      {
        skillList.map(({skillName, skillUrl}, index) =>  <SkillCard key={index} skillName={skillName}
          skillUrl={skillUrl}
          />)
      }
      </div>
      <Footer
        phrase="Get in "
        link="touch."
        toAddress="/contact"></Footer>
        <div className='skills-vector-frame'>
          <img src={skillsVector} alt="skill-vector"
          className='skills-vector'
          />
        </div>
    </div>
  )
}

export default Skills