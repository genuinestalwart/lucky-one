import React from 'react';

const Item = (props) => {
    const { deleteItem, item } = props;

    return (
        <div className='flex items-center my-2'>
            <p className='text-blue-600 text-lg w-1/5'><i className="fa-solid fa-circle-right"></i></p>
            <p className='w-3/5'>{item.name}</p>
            <button onClick={() => deleteItem(item.id)} className='active:bg-blue-200 bg-indigo-200 block py-2 active:ring-2 ring-offset-2 ring-blue-500 rounded-md text-blue-700 w-1/5'><i className="fa-regular fa-trash-can"></i></button>
        </div>
    );
};

export default Item;