import React, { Component } from 'react';
import './CreateListing.css';
import Navbar from './../Navbar/Navbar.js'
import Photos from './Photos/Photos.js';
import ListingDetails from './ListingDetails/ListingDetails.js';
import PricingInventory from './PricingInventory/PricingInventory.js';
import Dropzone from 'react-dropzone'
import sha1 from 'sha1';
import superagent from 'superagent';
import axios from 'axios';
import { connect } from 'react-redux'

class CreateListing extends Component {
    constructor() {
        super();

        this.state = {
            images: [],
            title: '',
            category: 'none',
            primaryColor: 'none',
            itemType: 'none',
            description: '',
            price: 0,
            productionType: 'made-to-order',
            quantity: null,
        }
        this.uploadFile = this.uploadFile.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInput = this.handleSelect.bind(this);
        this.createListing = this.createListing.bind(this);
    }

    // componentDidMount() {
    //     if (!this.props.user) {
    //         alert('Please login to start selling on Ecom.')
    //         this.props.history.push('/')
    //     }
    // }

    uploadFile(files) {
        const image = files[0];
        const uploadPreset = 'vpcysec5';
        const cloudName = 'dqjnjwmb6';
        const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';
        const timestamp = Date.now() / 1000;
        const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + process.env.REACT_APP_CLOUD_SECRET;
        const signature = sha1(paramsStr);

        const params = {
            'api_key': process.env.REACT_APP_CLOUD_KEY,
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }
        let uploadRequest = superagent.post(url)
        uploadRequest.attach('file', image);

        Object.keys(params).forEach(key => {
            uploadRequest.field(key, params[key])
        })

        uploadRequest.end((err, resp) => {
            if (err) {
                alert(err)
                return
            }
            console.log('UPLOAD COMPLETE: ' + JSON.stringify(resp.body))
            const uploaded = resp.body;
            let updatedImages = Object.assign([], this.state.images)
            updatedImages.push(uploaded);
            this.setState({
                images: updatedImages
            })
        })
    }

    handleSelect(prop, val) {
        this.setState({ [prop]: val })
    }

    handleInput(prop, e) {
        this.setState({ [prop]: e })
    }

    createListing() {
        let price = parseFloat(this.state.price)

        let body = {
            title: this.state.title,
            price: price,
            color: this.state.primaryColor,
            itemtype: this.state.itemType,
            category: this.state.category,
            productiontype: this.state.productionType,
            quantity: this.state.quantity,
            itemdesc: this.state.description,
            seller_id: 1
        }
        axios.post('/api/createlisting', body).then(response => {
            this.state.images.map(element => {
                axios.post('/api/addphoto', { image_url: element.secure_url, product_ref: response.data[response.data.length - 1].product_id }).then(response => {
                })
            })
        })
    }

    render() {
        return (
            <div className='CreateListing'>
                <Navbar />
                <div className='CL-header'>Add New Listing</div>
                <div className='CL-container'>
                    <Photos
                        uploadFile={this.uploadFile.bind(this)}
                        images={this.state.images}
                    />
                    <ListingDetails
                        handleInput={this.handleInput}
                        handleSelect={this.handleSelect}
                        itemType={this.state.itemType}
                    />
                    <PricingInventory
                        productionType={this.state.productionType}
                        handleSelect={this.handleSelect}
                        handleInput={this.handleInput}
                    />
                </div>
                <div className='CL-footer'>
                    <button onClick={this.createListing}>Submit</button>
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

export default connect(mapStateToProps)(CreateListing);