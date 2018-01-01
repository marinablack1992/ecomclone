import React, { Component } from 'react';
import Navbar from './../../Navbar/Navbar.js';
import data from './Data.js';
import JwlryProduct from './JwlryProduct/JwlryProduct.js';
import Filter from './Filter/Filter.js';
import './JwlryAcc.css';

class JwlryAcc extends Component {
    constructor() {
        super();

        this.state = {
            productData: data,
            viewData: data,
            location: 'anywhere',
            price: 'any',
            
        }
        this.filterLocation = this.filterLocation.bind(this);
        this.filterPrice = this.filterPrice.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addColor = this.addColor.bind(this);
    }

    filterLocation(location) {
        let newData = this.state.productData.filter((product, index, array) => {
            if (location === 'united states') {
                if (product.location === location) {
                    this.setState({ location: location })
                    return product
                }
            } else if (location === 'anywhere') {
                this.setState({ location: location })
                return array
            }
        })
        this.setState({ viewData: newData })
    }

    filterPrice(price) {
        this.setState({ price: price })
        let newData = this.state.productData.filter((product, index, array) => {
            if (this.state.location === 'anywhere') {
                if (price === 'any') {
                    return array
                } else if (price === 'under25') {
                    if (product.price <= 25) {
                        return product
                    }
                } else if (price === 'low') {
                    if (product.price >= 25 && product.price <= 50) {
                        return product
                    }
                } else if (price === 'mid') {
                    if (product.price >= 50 && product.price <= 100) {
                        return product
                    }
                } else if (price === 'over100') {
                    if (product.price >= 100) {
                        return product
                    }
                }
            } else if (this.state.location === 'united states') {
                if (product.location === this.state.location) {
                    if (price === 'any') {
                        return product
                    } else if (price === 'under25') {
                        if (product.price <= 25) {
                            return product
                        }
                    } else if (price === 'low') {
                        if (product.price >= 25 && product.price <= 50) {
                            return product
                        }
                    } else if (price === 'mid') {
                        if (product.price >= 50 && product.price <= 100) {
                            return product
                        }
                    } else if (price === 'over100') {
                        if (product.price >= 100) {
                            return product
                        }
                    }
                }
            }
        })
        this.setState({ viewData: newData })
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val })
    }

    resetPrice() {
        this.setState({ price: 'any' })
    }

    addColor(color) {
        let colorArray = []
        let newColor = colorArray.push(color)

        console.log('color array: ', colorArray)
    }

    render() {
        console.log(this.state.colors)
        return (
            <div className='JwlryAcc'>
                <Navbar />
                <div className='container'>
                    <div className='mid-container'>
                        <Filter filterLocation={this.filterLocation}
                            filterPrice={this.filterPrice}
                            handleChange={this.handleChange}
                            resetPrice={this.resetPrice.bind(this)}
                            addColor={this.addColor}
                        />
                        <div className='products'>
                            {this.state.viewData.map((product, i) => {
                                return <JwlryProduct key={i} product={product} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JwlryAcc