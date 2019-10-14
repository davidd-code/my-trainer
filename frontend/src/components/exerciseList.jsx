
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const heading = {
    textAlign: "center",
    paddingTop: "2vh"
}

const img = {
    height: "2em"
}

class ExerciseListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.location.state.category,
            catergoyId: props.location.state.categoryId,
            exercises: [],
            exerciseImages: []
        }
    }

    componentDidMount() {
        const url = "https://wger.de/api/v2/exercise/?language=2&status=2&category=" + this.props.location.state.categoryId;
        console.log(url);
        axios.get(url)
        .then(res => {
            console.log(res.data);
            this.setState({
                exercises: res.data.results
            })
        });

        const imageUrl ="https://wger.de/api/v2/exerciseimage/?is_main=True";
        axios.get(imageUrl)
        .then(res => {
            this.setState({
                exerciseImages: res.data.results
            })
        })
    }

    render() {
        return(
            <div className="container">
                <h2 style={heading}>{this.state.category} Exercises</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.exercises.map(exercise=>
                            <tr key={exercise.id}>
                                <td>{exercise.name}</td>
                                {this.state.exerciseImages.map(image=>
                                    {
                                        if(image.exercise == exercise.id)
                                            return<td key={image.id}><img style={img} src={image.image}></img></td>
                                    }
                                )}
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ExerciseListPage;
