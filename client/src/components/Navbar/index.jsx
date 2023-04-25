import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./styles.module.css";
import logo from './logoipsum-264.svg';
import Hamburger from 'hamburger-react'
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
        <img src={logo} alt=""  />
        </div>
        <div className={styles.menu_icon} onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`${styles.nav_elements} ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar