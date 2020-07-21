import React, { Component } from 'react'
import Header from '../header&footer/Header/header.js';
import Footer from '../header&footer/Footer/footer.js';

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
