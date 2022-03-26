import React from 'react';
import Item from '../Item/Item';

const Items = (props) => {
    const items = [...new Set(props.itemlist)];
    return (
        <div>
            {
                items.map(item => <Item item={item}></Item>)
            }
        </div>
    );
};

export default Items;