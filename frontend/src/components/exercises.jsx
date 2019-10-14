import React, { Component } from 'react';

const h1 = {
    textAlign: "center",
    paddingTop: "2vh"
}

class ExercisesPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="container">
                <h1 style={h1}>List of Exercises</h1>
            </div>
        )
    }
}

export default ExercisesPage;
