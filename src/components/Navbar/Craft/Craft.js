import React from 'react';
import './Craft.css'

export default function(props){
    return (
        <div className='Craft'
            onMouseLeave={() => props.craft()}>
            <h1>All Craft & Supplies</h1>
            <div className='selections'>
                <div className='selector'>Home & Hobby</div>
                <div className='selector'>Jewelry & Beauty</div>
                <div className='selector'>Papercraft</div>
            </div>
        </div>
    )
}