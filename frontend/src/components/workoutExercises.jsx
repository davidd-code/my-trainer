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

class WorkoutExercisesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.location.state.category,
            categoryId: props.location.state.categoryId,
            exercises: [],
            exerciseImages: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const url = "https://wger.de/api/v2/exercise/?language=2&status=2&limit=200&category=" + this.props.location.state.categoryId;
        console.log(url);
        axios.get(url)
        .then(res => {
            console.log(res.data);
            this.setState({
                exercises: res.data.results
            })
        });

    }

    toggleExercise() {
        console.log("CLICKED");
    }

    handleSubmit = event => {
        // const url = "http://localhost:5000/workout//new";
    }

    render() {
        return(
            <div className="container">
                <h2 style={heading}>Create Your Workout</h2>
                <form>
                <div>
                    <input style={textArea} type="text" placeholder="Enter a name for this workout"/>
                </div>
                <p style={heading}>Select from a list of {this.state.category} Exercises</p>
                    <ListGroup>
                    {this.state.exercises.map(exercise =>
                        <ListGroup.Item>
                            <div key={exercise.id}>
                                <input type="checkbox" value={exercise.name}/>{exercise.name}
                            </div>
                        </ListGroup.Item>
                    )}
                    </ListGroup>
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

export default WorkoutExercisesPage;
