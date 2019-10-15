import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, ListGroup, Button } from 'react-bootstrap';

const heading = {
    textAlign: "center",
    paddingTop: "2vh"
}

const submitBtn = {
    width: "25vh"
}

const textArea = {
    width: "100%",
    marginTop: "2vh",
}

const submitBtnDiv = {
    textAlign: "center",
    marginTop: "1vh",
    marginBottom: "1vh"
}

class WorkoutStartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        const url = "http://localhost:5000/workouts/skeleton/create";
        console.log(event.title);

        axios.post(url, {
            title: this.state.title,
            exercises: this.state.selectedExercises
        })
        .then(res => {
            console.log(res.data);
            this.props.history.push('/workout')
        })
        .catch(err => console.log(err.response));
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value});
    }

    render() {
        return(
            <div className="container">
                <h2 style={heading}>{this.props.location.state.title}</h2>
                <form>
                <div>
                    <input name="title" style={textArea} type="text" placeholder="Enter a name for this workout" onChange={this.handleChange}/>
                </div>
                    <div style={submitBtnDiv}>
                        <Button style={submitBtn} variant="primary" type="submit" onClick={this.handleSubmit}>
                            CREATE
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default WorkoutStartPage;
