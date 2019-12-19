import React from 'react'
import {Link} from 'gatsby'
import { GoMarkGithub } from 'react-icons/go'
import {FaLinkedin} from 'react-icons/fa'
export default function Navbar() {
    return (
        <header>
         <nav className="navbar  bg-theme navbar-expand-lg ">
  
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item">
         <a href="https://www.github.com/parupallihemanth" className="nav-link text-dark" ><GoMarkGithub className="cart-icons" /></a>
         </li>
         <li className="nav-item">
         <a href = "https://www.linkedin.com/in/parupalli-hemanth-babu" className="nav-link text-dark " ><FaLinkedin className="cart-icons"/></a>
        </li>
    </ul>
  </div>
</nav> 
        </header>

    )
}
