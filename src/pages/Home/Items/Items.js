import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './items.css'

const Items = () => {
    const [items, setItems] = useState([]);
    const [display, setDisplay] = useState([]);

    const filterItem = categItem => {
        const updateItem = display.filter((curElm) => {
            return curElm.category === categItem;
        })
        setDisplay(updateItem)
    }
    
    useEffect(() => {
        fetch('./items.json')
            .then(res => res.json())
            .then(data=>setItems(data))
    },[])

    return (
        <div>
            <Nav className='nav-link'>
                <Link onClick={()=>filterItem('breakfast')} to='/breakfast'>Breakfast</Link>
                <Link onClick={()=>filterItem('lunch')} to='/lunch'>Lunch</Link>
                <Link onClick={()=>filterItem('dinner')} to='/dinner'>Dinner</Link>
            </Nav>
            <div className='items-container'>
            {
                items.slice(0,6).map(item => <Item
                    item={item}
                    id={item.id}></Item>)
                }
           </div>
        </div>
    );
};

export default Items;