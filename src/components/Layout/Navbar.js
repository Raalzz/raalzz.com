import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import r_logo from "../../images/r_logo.svg"

const Navbar = () => {
  return (
    <div id="navbar">
      <ul className="navbar">
        <li className="logo">
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
          <Link to="/">
            <img src={r_logo} alt={r_logo} />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
