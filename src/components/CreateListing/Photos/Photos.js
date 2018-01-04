import React, { Component } from 'react';
import './Photos.css';
import Dropzone from 'react-dropzone'


class Photos extends Component {
    render() {
        return (
            <div className='Photos'>
                <div className='P-header'>
                    <h1>Photos</h1>
                    <p>Add up to 8 photos so potential buyers can see your product.</p>
                </div>

                <div className='P-container'>
                    <div className='P-info'>
                        <div className='P-top'>
                            <h1>Photos *</h1>
                            <p>Use up to eight photos so that potential buyers can see your product from different angles.</p>
                        </div>
                        <div className='P-bottom'>
                            <h2>Tips:</h2>
                            <ul>
                                <li>Use natural lighting.</li>
                                <li>Use another object for scale.</li>
                                <li>Show your product being used.</li>
                                <li>Use a clean, simple backdrop.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='P-uploads'>
                        <Dropzone className='photoholder' onDrop={this.props.uploadFile}
                            style={{
                                backgroundImage: `url(${this.props.images[0] ? this.props.images[0].url : null})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                        </Dropzone>

                        <Dropzone className='photoholder' onDrop={this.props.uploadFile}
                            style={{
                                backgroundImage: `url(${this.props.images[1] ? this.props.images[1].url : null})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                        </Dropzone>

                        <Dropzone className='photoholder' onDrop={this.props.uploadFile}
                            style={{
                                backgroundImage: `url(${this.props.images[2] ? this.props.images[2].url : null})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                        </Dropzone>

                        <Dropzone className='photoholder' onDrop={this.props.uploadFile}
                            style={{
                                backgroundImage: `url(${this.props.images[3] ? this.props.images[3].url : null})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                        </Dropzone>

                        <Dropzone className='photoholder' onDrop={this.props.uploadFile}
                            style={{
                                backgroundImage: `url(${this.props.images[4] ? this.props.images[4].url : null})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                        </Dropzone>

                        <Dropzone className='photoholder' onDrop={this.props.uploadFile}
                            style={{
                                backgroundImage: `url(${this.props.images[5] ? this.props.images[5].url : null})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                        </Dropzone>

                        <Dropzone className='photoholder' onDrop={this.props.uploadFile}
                            style={{
                                backgroundImage: `url(${this.props.images[6] ? this.props.images[6].url : null})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                        </Dropzone>

                        <Dropzone className='photoholder' onDrop={this.props.uploadFile}
                            style={{
                                backgroundImage: `url(${this.props.images[7] ? this.props.images[7].url : null})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                        </Dropzone>



                    </div>
                </div>
            </div>
        )
    }
}

export default Photos