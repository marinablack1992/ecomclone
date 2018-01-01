import React from 'react';
import './Jewelry.css'
import { Link } from 'react-router-dom';

export default function (props) {
    return (
        <div className='Jewelry'
            onMouseLeave={() => props.jewelry()}>
            <Link className='linkF' to={`jewelry-all`}><h1>All Jewelry & Accessories</h1></Link>
            <div className='selections'>
                <Link className='linkF' to={`/accessories`}><div className='selector'>Accessories</div></Link>
                <Link className='linkF' to={`/bags-purses`}><div className='selector'>Bags & Purses</div></Link>
                <Link className='linkF' to={`/necklaces`}><div className='selector'>Necklaces</div></Link>
                <Link className='linkF' to={`/rings`}><div className='selector'>Rings</div></Link>
                <Link className='linkF' to={`/earrings`}><div className='selector'>Earrings</div></Link>
                <Link className='linkF' to={`/bracelets`}><div className='selector'>Bracelets</div></Link>
                <Link className='linkF' to={`/body-jewelry`}><div className='selector'>Body Jewelry</div></Link>
                <Link className='linkF' to={`/jewelry-all`}><div className='all'>All Jewelry</div></Link>
            </div>
        </div>
    )
}