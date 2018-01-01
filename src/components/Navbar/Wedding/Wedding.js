import React from 'react';
import './Wedding.css'

export default function(props){
    return (
        <div className='Wedding'
            onMouseLeave={() => props.wedding()}>
            <h1>All Wedding & Party</h1>
            <div className='selections'>
                <div className='selector'>Party Supplies</div>
                <div className='selector'>Invitations & Paper</div>
                <div className='selector'>Wedding Decorations</div>
                <div className='selector'>Wedding Gifts</div>
                <div className='selector'>Wedding Accessories</div>
                <div className='selector'>Wedding Clothing</div>
                <div className='selector'>Wedding Jewelry</div>
                <div className='all'>All Wedding</div>
            </div>
        </div>
    )
}