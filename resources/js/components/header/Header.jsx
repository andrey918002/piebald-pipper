import './Header.css';
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
                        <a href="#" className="nav__logo"><img src="../../../assets/img/ogo-removebg-preview-removebg-preview.png" alt="" className="logo__img" /></a>
                        <ul className="nav__menu">
                            <li className="menu__item"><Link to="/" className="item__link">Home</Link></li>
                            <li className="menu__item"><Link to="/about" className="item__link">About</Link></li>
                            <li className="menu__item"><Link to="/contact" className="item__link">Contact</Link></li>
                            <li className="menu__item"><Link to="/catalog" className="item__link">Catalog</Link></li>
                        </ul>
                        <div className="nav__info">
                            <div className="info__shop">
                                <Link to="/profile" className='shop_link'><FontAwesomeIcon icon={faUser} style={{color: "#deddda",}} /></Link>
                                <Link to="/cart" className="shop__link"><FontAwesomeIcon icon={faCartShopping} style={{color: "#deddda",}} /></Link>
                                <span className='shop__score'></span>
                            </div>
                        </div>
                    </nav>
                    <div className="header__info">
                        <h1 className="info__title">Pied Piper</h1>
                        <span className='info__subTitle'>electronics store</span>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;
