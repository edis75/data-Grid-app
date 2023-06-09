import React, { useState } from "react";
import "../css/navbar.css";
import { FaTwitter, FaInstagram,FaLinkedin,FaYoutube } from 'react-icons/fa';



function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
       <a class="navbar-brand" href="/">
          <h3 class="nav-h3">Rast Mobil</h3>
        </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Hakkımızda
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Juri-Yarışma Yazılımı
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Word Ninja
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Word Pyramids
          </a>
        </li>
        <li className="nav__item">
        <ul className="social-icons">
      <li>
        <a className="nav_icons" href="https://twitter.com">
          <FaTwitter color="#744BFC" />
        </a>
        <a className="nav_icons" href="https://instagram.com">
          <FaInstagram color="#744BFC"  />
        </a>
        <a className="nav_icons" href="https://linkedin.com">
          <FaLinkedin  color="#744BFC"  />
        </a>
        <a className="nav_icons" href="https://linkedin.com">
          <FaYoutube  color="#744BFC"  />
        </a>
      </li>
     
      
    </ul>
          
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;