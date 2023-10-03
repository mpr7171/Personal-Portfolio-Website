import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* Animated Portfolio Text */}
      {/* <div className="text-4xl font-bold">
        <span className="text-blue-600">P</span>
        <span className="text-red-600">O</span>
        <span className="text-yellow-400">R</span>
        <span className="text-green-400">T</span>
        <span className="text-purple-400">F</span>
        <span className="text-pink-400">O</span>
        <span className="text-blue-600">L</span>
        <span className="text-red-600">I</span>
        <span className="text-yellow-400">O</span>
      </div> */}

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={-80}>
              Experience
            </Link>
          </li>
          <li>
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
          </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} offset={-80}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="experience" smooth={true} duration={500} offset={-80}>
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500} offset={-80}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} offset={-80}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/pranav-reddy-111331223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/mpr7171"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c13584]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/pranav__0078/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
