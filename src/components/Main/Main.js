import React, { useEffect, useState } from 'react';
import Answers from '../Answers/Answers';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Main = () => {
    const [items, setItems] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const addToCart = id => {
        const found = data.find(el => el.id === id);
        const newItems = [...items, found];
        setItems(newItems);
    };

    const deleteItem = id => {
        const newItems = items.filter(el => el.id !== id);
        setItems(newItems);
    };

    const chooseAgain = () => {
        setItems([]);
    };

    return (
        <main className='m-8 md:mx-12'>
            <div className='md:flex'>
                <Cart di={deleteItem} handler={chooseAgain} items={items}></Cart>
                <Products handler={addToCart}></Products>
            </div>
            <Answers></Answers>
        </main>
    );
};

export default Main;