import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h2 className='font-semibold my-8 text-3xl'>Per kg Price</h2>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;