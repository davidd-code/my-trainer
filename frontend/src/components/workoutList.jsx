import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

const heading = {
    textAlign: "center",
    paddingTop: "2vh"
}

const button = {
    marginTop: "4vh"
}
class WorkoutListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className="container">
                <h2 style={heading}>Workouts</h2>
                <ButtonToolbar>
                    <Button href="/workout/create/" style={button} variant="primary" block>Create Workout</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default WorkoutListPage;
