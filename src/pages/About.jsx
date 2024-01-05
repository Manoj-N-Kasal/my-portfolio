import React from 'react'
import "./About.css"
import tempimg from "../assets/components/images/tem.jpg";
const About = () => {
  return (
    <>
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'></link>
<h1 className='aboutH'>About Me</h1>
<div className='aboutme'>
<p>I'm a recent graduate in Electronics & Communication Engineering, actively seeking an entry-level position where I can apply and expand my skills and knowledge.
  </p>
  <p> My skill set encompasses Java, Python, HTML/CSS, JavaScript, React Js and SQL.
  I have gained hands-on experience in both Front-end and Back-end  technologies during my internship at Varcons Technologies. I have demonstrated my proficiency in React Js through my  projects.
  </p>
  <p>
  Secured 5&#9733; coding rating on HackerRank  which highlights my problem-solving abilities and coding proficiency. Complementing my technical skills, I hold certifications in <span> <a target='_blank' href="https://drive.google.com/file/d/1GovQYSM0BiOCwCPrmNpNBYbBBYFUHCP-/view?usp=sharing">Java</a>, <a  target='_blank' href="https://drive.google.com/file/d/1CoxB8nsFuh4k7cxF1Nj7_7BwNeWI-ff7/view?usp=sharing">JavaScript ES6</a> </span> and <span><a  target='_blank' href="https://drive.google.com/file/d/1UPG3H2MLuS10njXElnljnlJW2GtfLrbp/view?usp=sharing">React Js</a> </span> showcasing my commitment to continuous learning. Fluent in multiple languages. I am eager to contribute to the organization with my adaptable skills and to expand my knowledge and learnings.</p>
  </div>
  <div className="imgContainer">
    <img src={tempimg} alt="myimage" />
  </div>
    </>
  )
}
export default About