import './Sidebar.scss';
import LogoS from '../../assets/images/logo-s.svg';
import {Link, NavLink} from 'react-router-dom';
import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import {useState} from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNavBar = () => {
        setShowNav((prevShowNav) => !prevShowNav);
    }
    return (
        <div className="nav-bar">
            <Link className="logo" to="/" onClick={() => setShowNav(false)}>
                <img src={LogoS} alt="logo"/>
                <h3 className="sub-logo">Hassan</h3>
            </Link>
            <nav className={showNav ? 'show' : ''}>
                <NavLink exact="true" to="/" activeclassname="active" onClick={() => setShowNav(false)}>
                     <RiHome2Line/>
                </NavLink>
                <NavLink exact="true" to="/about" activeclassname="active" className="about-link" onClick={() => setShowNav(false)}>
                     <FaRegUser/>
                </NavLink>
                <NavLink exact="true" to="/contact" activeclassname="active" className="contact-link" onClick={() => setShowNav(false)}>
                    <FaEnvelope/>
                </NavLink>
                <NavLink exact="true" to="/skills" activeclassname="active" className="skills-link" onClick={() => setShowNav(false)}>
                    <GiSkills/>
                </NavLink>
                 <NavLink exact="true" to="/projects" activeclassname="active" className="projects-link" onClick={() => setShowNav(false)}>
                    <GrProjects/>
                </NavLink>
                <IoMdClose className="close-icon" onClick={() => setShowNav(false)}/>
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/hassan-munene-41290b237/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="anchor-icon"/>
                    </a>
                </li>
                <li>
                     <a href="https://github.com/HassanMunene" target="_blank" rel="noreferrer">
                         <FaGithub className="anchor-icon"/>
                     </a>
                </li>
                <li>
                     <a href="https://x.com/Awanzii">
                         <FaSquareXTwitter className="anchor-icon"/>
                     </a>
                </li>
            </ul>
            <FiMenu onClick={toggleNavBar} className='mobile-link' />
        </div>
    )
 }
 
 export default Sidebar;

