import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, ListGroup, Button } from 'react-bootstrap';
import '../styles/workout-form.css';


class ExerciseDataPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: '',
            reps: '',
            exId: '',
            workoutData: []
        }
    }

    componentDidMount() {
        const server = "http://ec2-54-206-50-53.ap-southeast-2.compute.amazonaws.com:5000"
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
                <h2 className="heading"></h2>
                {for(var key in this.state.savedWorkouts) {
                }}

                    <div className="submitBtnDiv">
                        <Button className="submitBtn" variant="primary" type="submit" onClick={this.handleSubmit}>
                            SAVE WORKOUT
                        </Button>
                    </div>
            </div>
        )
    }
}

export default ExerciseDataPage;
