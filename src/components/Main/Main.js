import React from 'react';
import Answers from '../Answers/Answers';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Main = () => {
    return (
        <main>
            <div>
                <Cart></Cart>
                <Products></Products>
            </div>
            <Answers></Answers>
        </main>
    );
};

export default Main;