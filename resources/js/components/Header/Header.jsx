import './Header.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className="wrapper">
                <header className="header">
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                    <nav className="nav container">
                        <a href="#" className="nav__logo"><img  src="../../../public/img/ogo-removebg-preview-removebg-preview.png" alt="" className="logo__img" /></a>
                        <ul className="nav__menu">
                            <li className="menu__item"><a href="#" className="item__link">Home</a></li>
                            <li className="menu__item"><a href="#" className="item__link">About</a></li>
                            <li className="menu__item"><a href="#" className="item__link">Contact</a></li>
                        </ul>
                        <div className="nav__info">
                            <a href="#" className="item__link menu__item">Сatalog</a>
                            <div className="info__shop">
                                <a href="#" className="item__link"><FontAwesomeIcon icon={faCartShopping} /></a>
                                <span className='shop__score'></span>
                            </div>
                        </div>
                    </nav>
                    <header className="header__info">
                        <h1 className="info__title">piebald piper</h1>
                        <span className='info__subTitle'>electronics store</span>
                    </header>
                </header>
            </div>
        </div>
    );
}

export default Header;
