import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li className="logo">
          <Link to="/">Raalzz</Link>
          <Link to="/">R</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
