import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <>
    <div className="hcontainer">
    <h1> Hey, I'm Manoj N Kasal </h1>
    <h3>A Frontend focused Web Developer building the Frontend of Websites</h3>
    </div>
    <Link className='projcls' to='/Project'>PROJECTS</Link>
    <div className="socialLinks">
     <ul>
     <li><a target='_blank' href="https://www.linkedin.com/in/manoj-nagaraj-kasal-64307823a/"><img src="https://banner2.cleanpng.com/20180518/yk/kisspng-computer-icons-linkedin-5aff0283a31f04.0344839015266617636682.jpg" alt="in" /></a> </li>
     <li><a target='_blank' href="https://www.hackerrank.com/profile/manojkasal10"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png" alt="hr" /></a> </li>
      <li><a target='_blank' href="https://github.com/Manoj-N-Kasal/"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="git" /></a> </li>
     </ul>
     </div>
        </>
  )
}

export default Home