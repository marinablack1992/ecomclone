import React from 'react';
import './Art.css'

export default function(props){
    return (
        <div className='Art'
            onMouseLeave={() => props.art()}>
            <h1>Prints</h1>
            <h1>Photography</h1>
            <h1>Painting</h1>
            <div className='selections'>
                <div className='selector'>Oil</div>
                <div className='selector'>Watercolor</div>
                <div className='selector'>Acrylic</div>
                <div className='all'>All Art & Collectibles</div>
            </div>
        </div>
    )
}