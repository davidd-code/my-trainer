import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" href="#">my-trainer</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" href="#">Home<span class="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">Create Workout</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">Log</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">Schedule</Link>
                  </li>
                </ul>
                <ul className="navbar-nav">
                    <li>
                        <Link className="nav-link" href="#">Log In</Link>
                    </li>
                    <li>
                        <Link className="nav-link" href="#">Sign Up</Link>
                    </li>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Navbar;
