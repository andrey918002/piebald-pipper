// src/components/catalog/Catalog.jsx
import Header from '../header/Header';
import ProductCard from '../productCard/ProductCard';
import './Catalog.css';
const products = [
    {
        id: 1,
        image: 'path/to/image1.jpg',
        title: 'Product 1',
        description: 'Description of Product 1',
    },
    {
        id: 2,
        image: 'path/to/image2.jpg',
        title: 'Product 2',
        description: 'Description of Product 2',
    },
];

const Catalog = () => {
    return (
        <>
            <Header/>
            <div className="catalog">
                <h2 className="catalog-title">Product Catalog</h2>
                <div className="catalog-grid">
                    {products.map(product => (
                        <div className="catalog-item" key={product.id}>
                            <ProductCard
                                image={product.image}
                                title={product.title}
                                description={product.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default Catalog;
