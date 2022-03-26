import React from 'react';
import Items from '../Items/Items';

const Cart = () => {
    return (
        <div className='bg-blue-100 h-full my-8 order-2 p-6 md:px-4 md:py-6 rounded-lg md:w-1/4'>
            <h2 className='font-semibold text-3xl'>Selected Products</h2>
            <Items></Items>
            <button className='active:bg-blue-200 bg-indigo-200 block my-4 px-4 py-2 active:ring-2 ring-offset-2 ring-blue-500 rounded-md text-blue-700'>Choose one for me</button>
            <button className='active:bg-blue-200 bg-indigo-200 block my-4 px-4 py-2 active:ring-2 ring-offset-2 ring-blue-500 rounded-md text-blue-700'>Choose again</button>
        </div>
    );
};

export default Cart;