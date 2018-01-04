import React, { Component } from 'react';
import './PricingInventory.css';

class PricingInventory extends Component {
    render() {
        return (
            <div className='PricingInventory'>
                <div className='Pr-header'>
                    <h1>Inventory and Pricing</h1>
                </div>

                <div className='Pr-form'>
                    <div className='Pr-container'>
                        <div className='Pr-left'>
                            <div className='Pr-option'>
                                <h1>Price *</h1>
                                <p>Be sure to account for the costs of the labor and material, as well as business related expenses.</p>
                            </div>
                        </div>
                        <div className='Pr-right'>
                            <h3>$</h3><input className='input' type='text' onChange={(e) => this.props.handleInput('price', e.target.value)}></input>
                        </div>
                    </div>

                    <div className='Pr-container'>
                        <div className='Pr-left'>
                            <div className='Pr-option'>
                                <h1>Production *</h1>
                                <p>Please select whichever applies to your item.</p>
                            </div>
                        </div>
                        <div className='Pr-right'>
                            <div className='Pr-selections'>
                                <div className='Pr-select' onClick={() => this.props.handleSelect('productionType','made-to-order')}>
                                    <div className='circle-check'><div className={this.props.productionType === 'made-to-order' ? 'circle-select' : null}></div></div>
                                    <h2>Made To Order</h2>
                                </div>
                                <div className='Pr-select' onClick={() => this.props.handleSelect('productionType', 'limited-supply')}>
                                    <div className='circle-check'><div className={this.props.productionType === 'limited-supply' ? 'circle-select' : null}></div></div>
                                    <h2>Limited Supply</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.props.productionType === 'limited-supply' ?
                        <div className='Pr-container'>
                            <div className='Pr-left'>
                                <div className='Pr-option'>
                                    <h1>Quantity *</h1>
                                    <p>How many of this item do you have on hand?</p>
                                </div>
                            </div>
                            <div className='Pr-right'>
                                <input className='input' type='text' onChange={(e) => this.props.handleInput('quantity', e.target.value)}></input>
                            </div>
                        </div>
                        : null}


                </div>
            </div>
        )
    }
}

export default PricingInventory