import React from 'react';

const Product = (props) => {
    const { name, price, image } = props.product;

    return (
        <div>
            <div><img src={image} alt={name} /></div>
            <div>
                <h4>{name}</h4>
                <h5>{price} Tk</h5>
            </div>
        </div>
    );
};

export default Product;