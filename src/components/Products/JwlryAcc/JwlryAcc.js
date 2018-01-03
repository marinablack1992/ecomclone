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
            colors: [],
            type: 'all',
        }

        this.handleChange = this.handleChange.bind(this);
        this.addColor = this.addColor.bind(this);
        this.multipleFilters = this.multipleFilters.bind(this);
    }

    multipleFilters(location, price) {
        let productData = this.state.productData
        console.log('location: ', this.state.location)
        console.log('price: ', this.state.price)
        console.log('colors: ', this.state.colors)
        console.log('type: ', this.state.type)

        let filterLocation = productData.filter((product, index, array) => {
            if (this.state.location === 'united states') {
                if (product.location === this.state.location) {
                    return product
                }
            } else if (this.state.location === 'anywhere') {
                return array
            }
        })

        let filterPrice = filterLocation.filter((product, index, array) => {
            if (this.state.price === 'under25') {
                if (product.price <= 25) {
                    return product
                }
            } else if (this.state.price === 'low') {
                if (product.price >= 25 && product.price <= 50) {
                    return product
                }
            } else if (this.state.price === 'mid') {
                if (product.price >= 50 && product.price <= 100) {
                    return product
                }
            } else if (this.state.price === 'over100') {
                if (product.price >= 100) {
                    return product
                }
            } else if (this.state.price === 'any') {
                return array
            }
        })

        let filterColor = filterPrice.filter((product, index, array) => {
            if (this.state.colors.includes(product.color)) {
                return product
            } else if (this.state.colors.length < 1) {
                return array
            }
        })

        let filterType = filterColor.filter((product, index, array) => {
            if (this.state.type === 'all') {
                return array
            } else if (product.type === this.state.type) {
                return product
            }
        })
        this.setState({ viewData: filterType })
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val }, this.multipleFilters)
    }

    addColor(color) {
        let selectedColors = this.state.colors
        if (selectedColors.includes(color)) {
            selectedColors.splice(selectedColors.indexOf(color), 1)
        } else
            selectedColors.push(color);
        this.setState({ colors: selectedColors }, this.multipleFilters)
    }

    render() {
        return (
            <div className='JwlryAcc'>
                <Navbar />
                <div className='container'>
                    <div className='mid-container'>
                        <Filter
                            handleChange={this.handleChange}
                            addColor={this.addColor}
                            multipleFilters={this.multipleFilters}
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