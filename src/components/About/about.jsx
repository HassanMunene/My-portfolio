import './about.scss';


import AnimatedLetters from '../AnimatedLetters/animatedLetters.jsx'
import {useState, useEffect} from 'react';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import Loader from 'react-loaders'

const About = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const aboutMe = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<>
			<div className="container about-page">
				<span className="tags top-tags">&lt;body&gt;</span>
				<div className="text-zone">
					<h1>
						<AnimatedLetters letterClass={letterClass} strArray={aboutMe} idx={15}/>
					</h1>
					<p>
            			I'm a very ambitious front-end developer looking for a role in an 
            			established IT company with the opportunity to work with the latest 
            			technologies on challenging and diverse projects.
          			</p>
          			 <p align="LEFT">
            			I'm quiet confident, naturally curious, and perpetually working on 
            			improving my chops one design problem at a time.
          			</p>
          			<p>
            			If I need to define myself in one sentence that would be an industrious son, a sports fanatic 
            			and tech-obsessed!!!
          			</p>
				</div>
				<div className="cube-content">
					<div id="stars"></div>
					<div className="cube-spinner">
						<div className="face1">
							<FaReact/>
						</div>
						<div className="face2">
							<FaHtml5/>
						</div>
						<div className="face3">
							<FaCss3Alt/>
						</div>
						<div className="face4">
							<IoLogoJavascript/>
						</div>
						<div className="face5">
							<FaGitAlt/>
						</div>
						<div className="face6">
							<RiTailwindCssFill/>
						</div>
					</div>
				</div>
				<span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br/>
                    &lt;/html&gt;
                </span>
			</div>
			<Loader type="pacman" />
		</>
	)
}

export default About;
