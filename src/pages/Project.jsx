import React from 'react'
import './Project.css'
import gymimg from '../assets/components/images/gymimage.png';
import imdbimg from '../assets/components/images/imdbClone.png';
import weatherimg from '../assets/components/images/weatherimage.png';
const Project = () => {
  return (
    <>
      <div className="projContainer">
        <div className='oneProject'>

          <div className='imgcontainer'> <img src={imdbimg} alt="imdbimg" /> </div>
          <div className='projDetails'>
            <h3>IMDB CLONE</h3>
            <ul>
              <li>Developed a fully responsive IMDb clone using React.js, showcasing a commitment to creating dynamic and user-friendly web applications.</li>
              <li>The project seamlessly integrates movie data sourced from the TMDB API, providing up-to-date information on a vast array of films.</li>
              <li>The use of React Router DOM enhances the user experience by implementing smooth and efficient navigation throughout the application.</li>
            </ul>
            <ul className='projOtherlinks'>
              <li style={{listStyle:'none'}}><a target="_blank" href="https://github.com/Manoj-N-Kasal/react-imdb-clone">Github</a></li>
              <li style={{listStyle:'none'}}><a target="_blank" href="https://manoj-imdb-clone.netlify.app/">Live link</a></li>
            </ul>
  
          </div>
        </div>
        <div className='oneProject'>

          <div className='imgcontainer'> <img src={weatherimg} alt="weatherbimg" /> </div>
          <div className='projDetails'>
            <h3>WEATHER REACT APP</h3>
            <ul>
              <li>Developed a robust weather application using React.js, designed to deliver real-time weather updates with precision and accuracy.</li>
              <li>This project highlights the integration of APIs, enabling the application to fetch and display up-to-the-minute weather information.</li>
              <li>Allowing users to effortlessly access current weather conditions, forecasts, and additional relevant data.</li>
            </ul>
      
            <ul className='projOtherlinks'>
              <li style={{listStyle:'none'}}><a target="_blank" href="https://github.com/Manoj-N-Kasal/react-weather">Github</a></li>
              <li style={{listStyle:'none'}}><a target="_blank" href="https://manoj-react-weather.netlify.app/">Live link</a></li>
            </ul>
          </div>
        </div>
        <div className='oneProject'>

          <div className='imgcontainer'> <img src={gymimg} alt="imdbimg" /> </div>
          <div className='projDetails'>
            <h3>GYM TEMPLATE </h3>
            <ul>
              <li>Developed a comprehensive and responsive frontend template for a gym website, utilizing a stack that includes HTML, CSS and JavaScript.</li>
              <li>Design and functionality is optimized for desktop and mobile screen users.</li>
              <li>The Gym template encompasses a variety of pages like home,  about, services, contacts and overall providing an intuitive and enjoyable browsing experience for users.</li>
              </ul>
          
            <ul  className='projOtherlinks'>
              <li style={{listStyle:'none'}}><a target="_blank" href="https://github.com/Manoj-N-Kasal/Gym">Github</a></li>
              <li style={{listStyle:'none'}}><a target="_blank" href="https://manoj-n-kasal.github.io/Gym/">Live link</a></li>
            </ul>
          </div>
        </div>



      </div>
    </>
  )
}

export default Project