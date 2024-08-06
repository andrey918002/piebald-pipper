import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './header/Header';
import About from './about/About';
import Contact from './contact/Contact';
import Catalog from './catalog/Catalog';
import Cart from './cart/Cart';
import Profile from './profile/Profile';
import Footer from './footer/Footer';

function App() {
    const location = useLocation();
    const showFooter = !['/catalog'].includes(location.pathname);

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
                {showFooter && <Footer />}
            </Routes>
        </>
    );
}

export default App;
