import React from 'react';
import Items from '../Items/Items';

const Cart = () => {
    return (
        <div className='bg-blue-100 p-4 rounded-lg'>
            <h3 className='font-medium text-2xl'>Selected Products</h3>
            <Items></Items>
            <button className='active:bg-blue-200 bg-indigo-200 block my-4 px-4 py-2 active:ring-2 ring-offset-2 ring-blue-500 rounded-md text-blue-700'>Choose one for me</button>
            <button className='active:bg-blue-200 bg-indigo-200 block my-4 px-4 py-2 active:ring-2 ring-offset-2 ring-blue-500 rounded-md text-blue-700'>Choose again</button>
        </div>
    );
};

export default Cart;