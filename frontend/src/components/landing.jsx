import React, { Component } from 'react';
import '../styles/landing.css';

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="landing-image">
                <h1>Hello</h1>
                <p>Welcome to my trainer</p>
            </div>
        );
    }
}

export default LandingPage;
