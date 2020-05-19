import React, { Component } from 'react'
import Header from '../header&footer/Header/index.js';
import Footer from '../header&footer/Footer/index.js';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='page_container'>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
