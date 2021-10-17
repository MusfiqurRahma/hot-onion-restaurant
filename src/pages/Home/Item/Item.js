import React from 'react';
import './Item.css';

const Item = (props) => {
    const {name,title,price,img} =props.item;
    return (
        <div className='item-container'>
            <div className='item-img'>
            <img src={img} alt="" />
            </div>
            <h5>{name}</h5>
            <p>{title}</p>
            <h4>{price}</h4>
        </div>
    );
};

export default Item;