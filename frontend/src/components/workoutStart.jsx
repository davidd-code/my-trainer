import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, ListGroup, Button } from 'react-bootstrap';
import '../styles/workout-form.css';


class WorkoutStartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skeletonExercises: this.props.location.state.exercises
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
                <h2 className="heading">{this.props.location.state.title}</h2>
                <form>
                    {this.state.skeletonExercises.map(exercise =>
                        <Table bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th colSpan="3">{exercise}</th>
                                </tr>
                                <tr>
                                    <th>Set #</th>
                                    <th>Weight (Kg)</th>
                                    <th>Reps</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <input type="number"></input>
                                    </td>
                                    <td>
                                        <input type="number"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <input type="number"></input>
                                    </td>
                                    <td>
                                        <input type="number"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <input type="number"></input>
                                    </td>
                                    <td>
                                        <input type="number"></input>
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
