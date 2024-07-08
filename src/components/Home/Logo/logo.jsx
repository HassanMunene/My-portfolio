import './logo.scss';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import LogoS from '../../../assets/images/logo-s2.svg';
import { useEffect, useRef } from 'react'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()
    
    return (
        <div className="logo-container">
            <img 
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoS}
                alt="name logo"
            />
        </div>
    )
}

export default Logo;
