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
        <div className='order-1 md:pr-12 md:w-3/4'>
            <h2 className='font-semibold my-8 text-3xl'>Per kg Price</h2>
            <div className='gap-4 md:grid grid-cols-3'>
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;