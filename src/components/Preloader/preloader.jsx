import './preloader.scss';
import Logo from '../../assets/images/logo-s.svg';

const Preloader = () => {
    
    return (
        <div className="preloader">
            <div className="inner">
                <img src={Logo} alt="logo"/>
                <span>Hassan: web developer</span>
                <div className="progress-bar">
                    <div className="progress-bar_bg">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader
