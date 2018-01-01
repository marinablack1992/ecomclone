import React from 'react';
import './Clothing.css'

export default function(props){
    return (
        <div className='Clothing'
            onMouseLeave={() => props.clothing()}>
            <h1>All Clothing & Shoes</h1>
            <div className='selections'>
                <div className='selector'>Women's</div>
                <div className='selector'>Men's</div>
                <div className='selector'>Kids' & Baby</div>
                <div className='selector'>Bags & Purses</div>
            </div>
        </div>
    )
}