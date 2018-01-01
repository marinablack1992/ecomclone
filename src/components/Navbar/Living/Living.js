import React from 'react';
import './Living.css'

export default function(props){
    return (
        <div className='Living'
            onMouseLeave={() => props.living()}>
            <h1>All Home & Living</h1>
            <div className='selections'>
                <div className='selector'>Home</div>
                <div className='selector'>Bath & Beauty</div>
                <div className='selector'>Pet Supplies</div>
            </div>
        </div>
    )
}