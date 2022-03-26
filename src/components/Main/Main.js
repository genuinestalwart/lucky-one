import React from 'react';
import Answers from '../Answers/Answers';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Main = () => {
    return (
        <main className='m-8 md:mx-12'>
            <div className='md:flex'>
                <Cart></Cart>
                <Products></Products>
            </div>
            <Answers></Answers>
        </main>
    );
};

export default Main;