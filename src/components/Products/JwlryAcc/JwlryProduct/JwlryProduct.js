import React, { Component } from 'react';
import './JwlryProduct.css';
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class JwlryProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favorited: false,
        }
        this.favorite = this.favorite.bind(this);
    }

    favorite() {
        this.setState({
            favorited: !this.state.favorited
        })
    }
    
    render() {
        return (
            <div className='product'>
                {this.state.favorited ? <Icon onClick={this.favorite} className='heart' /> : <Icon onClick={this.favorite} className='empty heart' />}
                <div className='img'
                    style={{
                        backgroundImage: `url(${this.props.product.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "65%",
                    }}
                ></div>
                <h1>{this.props.product.title}</h1>
                <div className='review-holder'>
                    {this.props.product.rating === 1 ? <div className='star-rating'><Icon className='star' /><Icon className='empty star' /><Icon className='empty star' /><Icon className='empty star' /><Icon className='empty star' /></div> : null}
                    {this.props.product.rating === 2 ? <div className='star-rating'><Icon className='star' /><Icon className='star' /><Icon className='empty star' /><Icon className='empty star' /><Icon className='empty star' /></div> : null}
                    {this.props.product.rating === 3 ? <div className='star-rating'><Icon className='star' /><Icon className='star' /><Icon className='star' /><Icon className='empty star' /><Icon className='empty star' /></div> : null}
                    {this.props.product.rating === 4 ? <div className='star-rating'><Icon className='star' /><Icon className='star' /><Icon className='star' /><Icon className='star' /><Icon className='empty star' /></div> : null}
                    {this.props.product.rating === 5 ? <div className='star-rating'><Icon className='star' /><Icon className='star' /><Icon className='star' /><Icon className='star' /><Icon className='star' /></div> : null}
                    <div className='review-count'>({this.props.product.reviewCount})</div>
                </div>
                <h2>${this.props.product.price}</h2>
                <Link to='/jewelry-accessories' className='details'>View Details</Link>
            </div>
        )
    }
}

export default JwlryProduct