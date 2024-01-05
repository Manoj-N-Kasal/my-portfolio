import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [micon, setMicon] = useState(false)
    const handleClick = () => {
        setMicon(!micon);
    }
    return (
        <>
            <nav className={micon ? 'menu-open' : ''}>
                <div className="menu-icon" onClick={() => handleClick()}>
                    {micon ? "X" : <>&#9776;</>}</div>

                <ul className={`menu-links ${micon ? 'show' : ''}`}>

                    <Link className='linkClass' to="/">Home</Link>

                    <Link className='linkClass' to="/About">About Me</Link>

                    <Link className='linkClass' to="/Skills">Skills</Link>

                    <Link className='linkClass' to="/Project">Projects</Link>
                </ul>
                <div className="myName">
                    {/* <img src="../src/assets/components/images/manojimg.png" alt="myImage" className='myimg' /> */}
                    <h4>&lt;MANOJ N KASAL /&gt;</h4>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Header