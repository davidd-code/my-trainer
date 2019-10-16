import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar, ListGroup } from 'react-bootstrap';

const heading = {
    textAlign: "center",
    paddingTop: "2vh"
}

const button = {
    marginTop: "4vh",
    marginBottom: "2vh"
}

const listGroup = {
}
class WorkoutListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedWorkouts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:5000/workouts/skeleton/";
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
                <h2 style={heading}>Workouts</h2>
                <ButtonToolbar>
                    <Button href="/workout/create/" style={button} variant="primary" block>Create Workout</Button>
                </ButtonToolbar>
                <ListGroup>
                    <ListGroup.Item variant="light">Saved Workouts</ListGroup.Item>
                    {this.state.savedWorkouts.map(workout =>
                        <Link style={listGroup} to={{
                                pathname: "/workout/start/"+workout._id,
                                state: {
                                    exercises: workout.exercises,
                                    title: workout.title,
                                    workoutId: workout._id
                                }

                            }} key={workout._id}>
                            <ListGroup.Item>
                                {workout.title}
                            </ListGroup.Item>
                        </Link>
                    )}
                </ListGroup>

            </div>
        )
    }
}

export default WorkoutListPage;
