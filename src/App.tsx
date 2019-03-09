import './app.css';

import React, { Component } from 'react';

import Features from './components/landing/features';
import Navbar from './components/landing/navbar';
import Showcase from './components/landing/showcase';
import Header from './components/landing/header';
import Testimonials from './components/landing/testimonials';
import Footer from './components/landing/footer';


export default class App extends Component {
    render(): React.ReactElement<HTMLDivElement> {
        return (
            <div className="App">
                <Navbar />
                <Header />
                <Features />
                <Showcase />
                <Testimonials />
                <Footer />
            </div>
        );
    }
}
