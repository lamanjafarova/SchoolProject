import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
const Header = () => {
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);
  return (
    <div id='header'>
          <div className="headers"  style={{
          backgroundColor: navColor,
          transition: "all 1s"
        }}>
          <div className="logo">
                <h1>One School</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/add-courses"}>Add Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/wish-list"}>Wish List</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="btn">
                <button className='header-btn'>Contact Us</button>
            </div>
          </div>
        </div>
  )
}

export default Header