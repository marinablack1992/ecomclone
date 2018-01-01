import React from 'react';
import './Entertain.css'

export default function (props) {
    return (
        <div className='Entertain'
            onMouseLeave={() => props.entertain()}>
            <div className='left'>
                <h1>Toys</h1>
                <div className='selections'>
                    <div className='selector'>Baby & Toddler Toys</div>
                    <div className='selector'>Games & School</div>
                </div>
                <h1>Electronics & Accessories</h1>
                <div className='selections'>
                    <div className='selector'>Cameras</div>
                    <div className='selector'>Video Games</div>
                </div>
            </div>

            <div className='right'>
                <h1>Books</h1>
                <div className='selections'>
                    <div className='selector'>Children's Books</div>
                    <div className='selector'>Poetry</div>
                </div>
                <h1>Moves & Music</h1>
                <div className='selections'>
                    <div className='selector'>Music</div>
                    <div className='selector'>Movies</div>
                    <div className='all'>All Toys & Entertainment</div>
                </div>
            </div>

        </div>
    )
}