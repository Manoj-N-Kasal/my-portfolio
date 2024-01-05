import React from 'react'
import './Skills.css'
import skill1 from "../assets/components/images/skill1.png";
import skill2 from "../assets/components/images/skill2.png";
import skill3 from "../assets/components/images/skill3.png";
import skill4 from "../assets/components/images/skill4.jpg";

const Skills = () => {
  return (
    <>
      {/* <h1 className='skillh1'>SKILLS</h1> */}
      <div className="skillContainer">
        <h4>HTML</h4>
        <h4>CSS</h4>
        <h4>JavaScript</h4>
        <h4>React</h4>
        <h4>Java</h4>
        <h4>Python</h4>
        <h4>SQL</h4>

      </div>
      <div className="imageContainer">
        <img src={skill1} alt="skill1" />
        <img src={skill2} alt="skill2" />
        <br/>
        <img  className='img34'src={skill3} alt="skill3" />
       <img className='img34' src={skill4} alt="skill4" />
       
      </div>
    </>
  )
}

export default Skills