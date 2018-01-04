import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux'

class Navbar extends Component {

    render() {
        console.log('user', this.props.user)
        return (
            <div className='Navbar'>
                <div className='top'>
                    <div className='group1'>
                        <h1>Ecom</h1>
                        <div className='inputbtn'>
                            <input className='input' placeholder='Search for items or shops'></input>
                            <button className='button1'>Search</button>
                        </div>
                    </div>
                    <div className='group2'>
                        <div className='links'>
                            <Link to='/create-listing' className='link'>Sell on Ecom</Link>
                            {this.props.user ? <img className='userimg' src={this.props.user.img} /> : <Link to='/' className='link'>Register</Link>}
                            {this.props.user ? <Link to='/'><button className='button2'>Account</button></Link> : <a href={process.env.REACT_APP_LOGIN}><button className='button2'>Sign In</button></a>}
                            <div className='cart-holder'>
                                <Icon className='shopping cart' size='large'></Icon>
                                <h2>Cart</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end top  //  start bottom */}
                <div className='bottom'>
                    <Link to='/jewelry-accessories' className='category'>
                        Jewelry & Accessories</Link>
                    <Link to='/' className='category'>
                        Clothing & Shoes</Link>
                    <Link to='/' className='category'>
                        Home & Living</Link>
                    <Link to='/' className='category'>
                        Wedding & Party</Link>
                    <Link to='/' className='category'>
                        Toys & Entertainment</Link>
                    <Link to='/' className='category'>
                        Art & Collectibles</Link>
                    <Link to='/' className='category'>
                        Craft Supplies & Tools</Link>
                    <Link to='/' className='category'>
                        Vintage</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Navbar);