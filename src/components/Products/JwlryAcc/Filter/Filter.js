import React, { Component } from 'react';
import './Filter.css'
import { Icon } from 'semantic-ui-react';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //location:
            anywhere: true,
            unitedStates: false,
            //price:
            any: true,
            under25: false,
            low: false,
            mid: false,
            over100: false,
            //color: 
            black: false,
            white: false,
            gold: false,
            silver: false,
            blue: false,
            red: false,
            //type:
            allItems: true,
            handmade: false,
            vintage: false,
        }

        this.locationSelect = this.locationSelect.bind(this);
        this.priceSelect = this.priceSelect.bind(this);
        this.colorSelect = this.colorSelect.bind(this);
    }

    locationSelect(location) {
        if (location === 'anywhere') {
            this.setState({
                anywhere: true,
                unitedStates: false
            })
        } else this.setState({
            anywhere: false,
            unitedStates: true
        })
    }

    priceSelect(price) {
        if (price === 'any') {
            this.setState({
                any: true,
                under25: false,
                low: false,
                mid: false,
                over100: false,
            })
        } else if (price === 'under25') {
            this.setState({
                any: false,
                under25: true,
                low: false,
                mid: false,
                over100: false,
            })
        } else if (price === 'low') {
            this.setState({
                any: false,
                under25: false,
                low: true,
                mid: false,
                over100: false,
            })
        } else if (price === 'mid') {
            this.setState({
                any: false,
                under25: false,
                low: false,
                mid: true,
                over100: false,
            })
        } else if (price === 'over100') {
            this.setState({
                any: false,
                under25: false,
                low: false,
                mid: false,
                over100: true,
            })
        }
    }

    colorSelect(color) {
        this.setState({
            [color]: !this.state[color]
        })
    }

    typeSelect(type) {
        if (type === 'all') {
            this.setState({
                allItems: true,
                handmade: false,
                vintage: false,
            })
        } else if (type === 'handmade') {
            this.setState({
                allItems: false,
                handmade: true,
                vintage: false,
            })
        } else if (type === 'vintage') {
            this.setState({
                allItems: false,
                handmade: false,
                vintage: true,
            })
        }
    }

    render() {
        return <div className='Filter'>
            <div className='option-box'>
                <h1>Shop Location</h1>
                <div className='option' onClick={() => {
                    this.locationSelect('anywhere')
                    this.props.handleChange('location', 'anywhere')
                }}>
                    <div className='circle-check'>
                        <div className={this.state.anywhere ? 'circle-select' : null}></div></div>
                    <h2>Anywhere</h2>
                </div>
                <div className='option' onClick={() => {
                    this.locationSelect('united states')
                    this.props.handleChange('location', 'united states')
                }}>
                    <div className='circle-check'>
                        <div className={this.state.unitedStates ? 'circle-select' : null}></div></div>
                    <h2>United States</h2>
                </div>
            </div>
            <div className='option-box'>
                <h1>Price ($)</h1>
                <div className='option' onClick={() => {
                    this.priceSelect('any')
                    this.props.handleChange('price', 'any')
                }}>
                    <div className='circle-check'><div className={this.state.any ? 'circle-select' : null}></div></div>
                    <h2>Any price</h2>
                </div>
                <div className='option' onClick={() => {
                    this.priceSelect('under25')
                    this.props.handleChange('price', 'under25')
                }}>
                    <div className='circle-check'>
                        <div className={this.state.under25 ? 'circle-select' : null}></div></div>
                    <h2>Under 25</h2>
                </div>
                <div className='option' onClick={() => {
                    this.priceSelect('low')
                    this.props.handleChange('price', 'low')
                }}>
                    <div className='circle-check'>
                        <div className={this.state.low ? 'circle-select' : null}></div></div>
                    <h2>$25 to $50</h2>
                </div>
                <div className='option' onClick={() => {
                    this.priceSelect('mid')
                    this.props.handleChange('price', 'mid')
                }}>
                    <div className='circle-check'>
                        <div className={this.state.mid ? 'circle-select' : null}></div></div>
                    <h2>$50 to $100</h2>
                </div>
                <div className='option' onClick={() => {
                    this.priceSelect('over100')
                    this.props.handleChange('price', 'over100')
                }}>
                    <div className='circle-check'>
                        <div className={this.state.over100 ? 'circle-select' : null}></div></div>
                    <h2>Over $100</h2>
                </div>
            </div>
            <div className='option-box'>
                <h1>Color</h1>
                <div className='option' onClick={() => {
                    this.colorSelect('black')
                    this.props.addColor('black')
                }}>
                    <div className='box-check'>
                        {this.state.black ? <Icon className='checkmark' /> : null}
                    </div>
                    <h2>Black</h2></div>
                <div className='option' onClick={() => {
                    this.colorSelect('white')
                    this.props.addColor('white') 
                }}>
                    <div className='box-check'>
                        {this.state.white ? <Icon className='checkmark' /> : null}
                    </div>
                    <h2>White</h2></div>
                <div className='option' onClick={() => {
                    this.colorSelect('gold')
                    this.props.addColor('gold')
                    
                }}>
                    <div className='box-check'>
                        {this.state.gold ? <Icon className='checkmark' /> : null}
                    </div>
                    <h2>Gold</h2></div>
                <div className='option' onClick={() => {
                    this.colorSelect('silver')
                    this.props.addColor('silver')
                    
                }}>
                    <div className='box-check'>
                        {this.state.silver ? <Icon className='checkmark' /> : null}
                    </div>
                    <h2>Silver</h2></div>
                <div className='option' onClick={() => {
                    this.colorSelect('blue')
                    this.props.addColor('blue')
                    
                }}>
                    <div className='box-check'>
                        {this.state.blue ? <Icon className='checkmark' /> : null}
                    </div>
                    <h2>Blue</h2></div>
                <div className='option' onClick={() => {
                    this.colorSelect('red')
                    this.props.addColor('red')
                    
                }}>
                    <div className='box-check'>
                        {this.state.red ? <Icon className='checkmark' /> : null}
                    </div>
                    <h2>Red</h2></div>
            </div>
            <div className='option-box'>
                <h1>Item type</h1>
                <div className='option' onClick={() => {
                    this.typeSelect('all')
                    this.props.handleChange('type', 'all')                    
                    
                }}>
                    <div className='circle-check'>
                    <div className={this.state.allItems ? 'circle-select' : null}></div></div>
                    <h2>All Items</h2>
                </div>
                <div className='option' onClick={() => {
                    this.typeSelect('handmade')
                    this.props.handleChange('type', 'handmade')
                }}>
                    <div className='circle-check'>
                    <div className={this.state.handmade ? 'circle-select' : null}></div></div>
                    <h2>Handmade</h2>
                </div>
                <div className='option' onClick={() => {
                    this.typeSelect('vintage')
                    this.props.handleChange('type', 'vintage')                    
                }}>
                    <div className='circle-check'>
                    <div className={this.state.vintage ? 'circle-select' : null}></div></div>
                    <h2>Vintage</h2>
                </div>
            </div>

        </div>
    }
}

export default Filter