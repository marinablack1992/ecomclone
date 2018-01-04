import React, { Component } from 'react';
import './ListingDetails.css';

class ListingDetails extends Component {
    constructor() {
        super();

        this.state = {
            category: 'None',
            type: 'none',
        }

        this.toggleOptions = this.toggleOptions.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    toggleOptions(e) {
        if (e === 'none') {
            this.setState({ showOptions: false, category: e })
        } else this.setState({ showOptions: true, category: e })
    }

    handleSelect(value) {
        this.setState({ type: value })
    }

    render() {
        return (
            <div className='ListingDetails'>
                <div className='L-header'>
                    <h1>Listing details</h1>
                    <p>Tell buyers all about your item.</p>
                </div>
                <div className='L-form'>
                    <div className='L-option-holder'>
                        <div className='L-option-info'>
                            <h1>Title *</h1>
                            <p>Use a descriptive title to help users find your item.</p>
                        </div>
                        <div className='L-right-inputs'>
                            <input className='input' onChange={(e) => this.props.handleInput('title', e.target.value)}></input>
                        </div>
                    </div>

                    <div className='L-option-holder'>
                        <div className='L-option-info'>
                            <h1>Category *</h1>
                            <p>Pick whatever category is closest to your item so buyers can find it.</p>
                        </div>
                        <div className='L-right-inputs'>
                            <select className='dropdown' onChange={(e) => this.props.handleInput('category', e.target.value)}>
                                <option value='none'>None</option>
                                <option value='jewelry-accessories'>Jewelry & accessories</option>
                                <option value='clothing-shoes'>Clothing & Shoes</option>
                                <option value='home-living'>Home & Living</option>
                                <option value='wedding-party'>Wedding & Party</option>
                                <option value='toys-entertainment'>Toys & Entertainment</option>
                                <option value='art-collectibles'>Art & Collectibles</option>
                                <option value='craft-tools'>Craft Supplies & Tools</option>
                            </select>
                        </div>
                    </div>

                    <div className='L-option-holder'>
                        <div className='L-option-info'>
                            <h1>Primary Color</h1>
                            <p>Pick whatever color is closest to your item.</p>
                        </div>
                        <div className='L-right-inputs'>
                            <select className='dropdown' onChange={(e) => this.props.handleInput('primaryColor', e.target.value)}>
                                <option value='none'>None</option>
                                <option value='silver'>Silver</option>
                                <option value='gold'>Gold</option>
                                <option value='bronze'>Bronze</option>
                                <option value='red'>Red</option>
                                <option value='blue'>Blue</option>
                                <option value='green'>Green</option>
                                <option value='yellow'>Yellow</option>
                            </select>
                        </div>
                    </div>

                    <div className='L-option-holder'>
                        <div className='L-option-info'>
                            <h1>Item Type *</h1>
                            <p>Pick the best fit for your item.</p>
                        </div>
                        <div className='L-select-container'>
                            <div className='L-select' onClick={() => this.props.handleSelect('itemType', 'none')}>
                                <div className='circle-check'><div className={this.props.itemType === 'none' ? 'circle-select' : null}></div></div>
                                <h2>None</h2>
                            </div>
                            <div className='L-select' onClick={() => this.props.handleSelect('itemType', 'vintage')}>
                                <div className='circle-check'><div className={this.props.itemType === 'vintage' ? 'circle-select' : null}></div></div>
                                <h2>Vintage</h2>
                            </div>
                            <div className='L-select' onClick={() => this.props.handleSelect('itemType', 'handmade')}>
                                <div className='circle-check'><div className={this.props.itemType === 'handmade' ? 'circle-select' : null}></div></div>
                                <h2>Handmade</h2>
                            </div>
                        </div>
                    </div>

                    <div className='L-option-holder'>
                        <div className='L-description'>
                            <h1>Description *</h1>
                            <p>Start with a quick overview of your item.</p>
                            <p>Use bullet points to make your description easier to read.</p>
                            <p>Tell buyers about the process you went through to make this item, as well as the story behind it.</p>
                        </div>
                        <div className='L-right-inputs'>
                            <textarea rows='10' onChange={(e) => this.props.handleInput('description', e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingDetails