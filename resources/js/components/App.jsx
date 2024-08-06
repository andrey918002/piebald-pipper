import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './header/Header.jsx';
import About from './about/About.jsx';
import Contact from './contact/Contact.jsx';
import Catalog from './catalog/Catalog.jsx';
import Cart from './cart/Cart.jsx';
import Profile from './profile/Profile.jsx';
import Footer from './footer/Footer.jsx';

function App() {
    const location = useLocation();
    const showFooter = ['/', '/about', '/contact'].includes(location.pathname);

    return (
        <>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<Header />}/>
                <Route path="/admin/product" element={<Header />}/>
            </Routes>
            {showFooter && <Footer />}
        </>
    );
}

export default App;
