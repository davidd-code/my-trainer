import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, ListGroup, Button } from 'react-bootstrap';
import '../styles/workout-form.css';

var rowCounter = 0;
class ExerciseDataPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: '',
            reps: '',
            exName: props.location.state.exerciseName,
            exId: props.location.state.exerciseId,
            savedWorkouts: [],
            workoutData: [],
            matchingExercises: []
        }
    }

    componentDidMount() {
        const server = "http://localhost:5000"
        const url = server + "/workouts/";
        axios.get(url)
        .then(res => {
            this.setState({
                savedWorkouts: res.data
            });
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {
        return(
            <div className="container">
                <h2 className="heading">{this.state.exName}</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Weight</th>
                            <th>Reps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.savedWorkouts.map(workout =>{
                            workout.setInfo.map(exercise => {
                                if(exercise.exercise == this.state.exId) {
                                    this.state.matchingExercises.push(exercise);
                                }
                            })
                        })}

                        {this.state.matchingExercises.map(match => {
                            return(
                                <tr>
                                    <td>{++rowCounter}</td>
                                    <td>{match.weight}</td>
                                    <td>{match.reps}</td>
                                </tr>

                            );
                        })}
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default ExerciseDataPage;
