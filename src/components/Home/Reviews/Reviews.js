import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './Reviews.css'
import { Link } from 'react-router-dom';

class Reviews extends Component {

    render() {
        return (
            <div className='Reviews'>
                <span>Recent reviews from happy people</span>
                <div className='hold-reviews'>
                    <div className='container'>
                        <div className='img'><img alt='user' src='https://relayfm.s3.amazonaws.com/uploads/user/avatar/66/user_avatar_katiefloyd_artwork.png' /></div>
                        <h1>NAME wrote on MONTH DATE</h1>
                        <div className='star-rating'>
                            <Icon className='star' />
                            <Icon className='star' />
                            <Icon className='star' />
                            <Icon className='star' />
                            <Icon className='star' />
                        </div>
                        <div className='desc'>Item was shidivped and received before the Christmas rush. Great quality and beautiful.</div>
                        <div className='img-holder'
                            style={{
                                backgroundImage: "url(" + "https://img1.etsystatic.com/117/0/9716623/il_fullxfull.1072290113_feam.jpg" + ")",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "300px",
                            }}>
                        </div>
                        <Link to='/' className='link'>PRODUCT NAME OR SOMETHING</Link>
                    </div>






                    <div className='container'>
                        <div className='img'><img alt='user' src='https://relayfm.s3.amazonaws.com/uploads/user/avatar/66/user_avatar_katiefloyd_artwork.png' /></div>
                        <h1>NAME wrote on MONTH DATE</h1>
                        <div className='star-rating'>
                            <Icon className='star' />
                            <Icon className='star' />
                            <Icon className='star' />
                            <Icon className='star' />
                            <Icon className='star' />
                        </div>
                        <div className='desc'>Item was shidivped and received before the Christmas rush. Great quality and beautiful.</div>
                        <div className='img-holder'
                            style={{
                                backgroundImage: "url(" + "https://img1.etsystatic.com/117/0/9716623/il_fullxfull.1072290113_feam.jpg" + ")",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "300px",
                            }}>
                        </div>
                        <Link to='/' className='link'>PRODUCT NAME OR SOMETHING</Link>
                    </div>
                    <div className='container'>
                        <div className='img'><img alt='user' src='https://relayfm.s3.amazonaws.com/uploads/user/avatar/66/user_avatar_katiefloyd_artwork.png' /></div>
                        <h1>NAME wrote on MONTH DATE</h1>
                        <div className='star-rating'>
                            <Icon className='star' />
                            <Icon className='star' />
                            <Icon className='star' />
                            <Icon className='star' />
                            <Icon className='star' />
                        </div>
                        <div className='desc'>Item was shidivped and received before the Christmas rush. Great quality and beautiful.</div>
                        <div className='img-holder'
                            style={{
                                backgroundImage: "url(" + "https://img1.etsystatic.com/117/0/9716623/il_fullxfull.1072290113_feam.jpg" + ")",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "300px",
                            }}>
                        </div>
                        <Link to='/' className='link'>PRODUCT NAME OR SOMETHING</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews