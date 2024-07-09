import './home.scss';
import {useState} from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetters.jsx'
import {Link} from 'react-router-dom';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['H', 'a', 's', 's', 'a', 'n', ','];
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.',];

    return (
        <>
            <div className="container home-page">
                <span className="tags top-tags">&lt;body&gt;</span>
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <span className={`${letterClass} _15`}></span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16}/>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={23} />
                    </h1>
                    <h2>Front End Developer / JavaScript Expert</h2>
                    <Link className="contact-button" to="/contact">CONTACT ME</Link>
                </div>
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br/>
                    &lt;/html&gt;
                </span>
            </div>
        </>
    )
}

export default Home;
