import React from 'react';

const Product = (props) => {
    const { id, name, price, image } = props.product;

    return (
        <div className='bg-violet-100 my-4 rounded-lg'>
            <div><img className='rounded-t-lg w-full' src={image} alt={name} /></div>
            <div className='p-4'>
                <h4 className='font-bold my-2 text-2xl'>{name}</h4>
                <h5 className='font-medium my-2 text-xl'>{price} Tk</h5>
                <button onClick={() => props.addToCart(id)} className='active:bg-blue-200 bg-indigo-200 block my-2 px-4 py-2 active:ring-2 ring-offset-2 ring-blue-500 rounded-md text-blue-700'>Add to cart <i className='fa-solid fa-cart-plus'></i></button>
            </div>
        </div>
    );
};

export default Product;