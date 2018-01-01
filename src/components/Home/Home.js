import React, { Component } from 'react';
import Navbar from './../Navbar/Navbar.js'
import './Home.css';
import { Link } from 'react-router-dom';
import Reviews from './Reviews/Reviews.js';

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Navbar />
                <div className='container'>
                    <div className='featured'>
                        <div className='editor-pick'>
                            <div className='img1'></div>
                            <div className='title-container'>
                                <p>Editors' picks</p>
                                <div className='link-holder'><Link className='editor-link' to='/'>Personalized and custom jewelry</Link></div>
                            </div>
                        </div>

                        <div className='editor-pick'>
                            <div className='img2'></div>
                            <div className='title-container'>
                                <p>Editors' picks</p>
                                <div className='link-holder'><Link className='editor-link' to='/'>Dresses that dazzle</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className='link-more'><Link className='see-more' to='/'>See more ></Link></div>
                </div>

                <div className='gifts-container'>
                    <h1>Shop for gifts</h1>
                    <div className='container'>
                        <div className='category'><div className='img1'></div><Link to='/' className='link'>Gifts for her</Link></div>
                        <div className='category'><div className='img2'></div><Link to='/' className='link'>Gift ideas for dads</Link></div>
                        <div className='category'><div className='img3'></div><Link to='/' className='link'>Gifts ideas for moms</Link></div>
                        <div className='category'><div className='img4'></div><Link to='/' className='link'>Gifts for best friends</Link></div>
                        <div className='category'><div className='img5'></div><Link to='/' className='link'>Stylish gifts for the home under $30</Link></div>
                        <div className='category'><div className='img6'></div><Link to='/' className='link'>Gifts for every budget</Link></div>
                    </div>
                </div>
                <div className='reviews-container'>
                <Reviews />

                </div>

            </div>
        )
    }
}

export default Home