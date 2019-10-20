import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, ListGroup, Button } from 'react-bootstrap';
import '../styles/workout-form.css';


class WorkoutStartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skeletonExercises: this.props.location.state.exercises,
            weight: '',
            reps: '',
            exId: '',
            workoutData: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        const server = "http://localhost:5000"
        const url = server + "/workouts/add";

        const postSkeleton = this.props.location.state.workoutId;
        const postSet = this.state.workoutData;

        axios.post(url, {
            skeleton: this.props.location.state.workoutId,
            date: new Date(),
            set: this.state.workoutData
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

    saveField = event => {
        var set = {
            exercise: event.target.name,
            name: event.target.value,
            reps: this.state.reps,
            weight: this.state.weight
        }
        this.setState({
            workoutData: this.state.workoutData.concat(set)
        })

    }

    render() {
        return(
            <div className="container">
                <h2 className="heading">{this.props.location.state.title}</h2>
                <form>
                    {this.state.skeletonExercises.map(exercise =>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan="4">{exercise.name}</th>
                                </tr>
                                <tr>
                                    <th>Set #</th>
                                    <th>Weight</th>
                                    <th>Reps</th>
                                    <th>Save</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <input name="reps" type="number" onChange={this.handleChange}></input>
                                    </td>
                                    <td>
                                        <input name="weight" type="number" onChange={this.handleChange}></input>
                                    </td>
                                    <td>
                                        <Button name={exercise._id} variant="primary" onClick={this.saveField} value={exercise.name}>Save</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <input name="reps" type="number" onChange={this.handleChange}></input>
                                    </td>
                                    <td>
                                        <input name="weight" type="number" onChange={this.handleChange}></input>
                                    </td>
                                    <td>
                                        <Button name={exercise._id} variant="primary" onClick={this.saveField} value={exercise.name}>Save</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <input name="reps" type="number" onChange={this.handleChange}></input>
                                    </td>
                                    <td>
                                        <input name="weight" type="number" onChange={this.handleChange}></input>
                                    </td>
                                    <td>
                                        <Button name={exercise._id} variant="primary" onClick={this.saveField} value={exercise.name}>Save</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>


                    )}
                    <div className="submitBtnDiv">
                        <Button className="submitBtn" variant="primary" type="submit" onClick={this.handleSubmit}>
                            SAVE WORKOUT
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default WorkoutStartPage;
