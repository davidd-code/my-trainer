import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, ListGroup, Button } from 'react-bootstrap';
import '../styles/workout-form.css';


class LogDataPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skeletonExercises: this.props.location.state.exercises,
            workoutId: this.props.location.state.workoutId,
            workoutData: []
        }
    }

    componentDidMount() {
        const server = "http://ec2-54-206-50-53.ap-southeast-2.compute.amazonaws.com:5000"
        const url = server + "/workouts/" + this.state.workoutId;
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
                <h2 className="heading">{this.props.location.state.title}</h2>
                    {this.state.skeletonExercises.map(exercise =>
                        <Link to={{
                                pathname: "/log/exercise/"+exercise._id,
                                state: {
                                    skeletonId: this.state.workoutId,
                                    exerciseId: exercise._id
                                }

                            }} key={exercise._id}>
                            <ListGroup.Item>
                                {exercise.name}
                            </ListGroup.Item>
                        </Link>

                    )}
            </div>
        )
    }
}

export default LogDataPage;
