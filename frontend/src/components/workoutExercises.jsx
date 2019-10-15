import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, ListGroup, Button } from 'react-bootstrap';

const heading = {
    textAlign: "center",
    paddingTop: "2vh"
}

const img = {
    height: "3em"
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

    render() {
        return(
            <div className="container">
                <h2 style={heading}>Create Your Workout</h2>
                <p style={heading}>Select from a list of {this.state.category} Exercises</p>


                <ListGroup>
                {this.state.exercises.map(exercise =>
                    <ListGroup.Item>
                        <div onClick={this.toggleExercise} key={exercise.id}>
                            {exercise.name}
                        </div>
                    </ListGroup.Item>
                )}
                </ListGroup>
            </div>
        )
    }
}

export default WorkoutExercisesPage;
