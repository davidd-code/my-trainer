
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const h1 = {
    textAlign: "center",
    paddingTop: "2vh"
}

class ExerciseListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.location.state.category,
            catergoyId: props.location.state.categoryId,
            exercises: []
        }
    }

    componentDidMount() {
        const url = "https://wger.de/api/v2/exercise/?language=2&status=2&category=" + this.props.location.state.categoryId;
        console.log(url);
        axios.get(url)
        .then(res => {
            console.log(res.data);
            this.setState({
                exercises: res.data.results
            })
        })
    }

    render() {
        return(
            <div className="container">
                <h2 style={h1}>{this.state.category} Exercises</h2>
            </div>
        )
    }
}

export default ExerciseListPage;
