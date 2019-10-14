
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const heading = {
    textAlign: "center",
    paddingTop: "2vh"
}

const img = {
    height: "3em"
}
class ExerciseListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: props.location.state.category,
            categoryId: props.location.state.categoryId,
            exercises: [],
            exerciseImages: [],
            renderExercises: ''
        }
        this.linkExerciseToImages = this.linkExerciseToImages.bind(this);
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

        const imageUrl ="https://wger.de/api/v2/exerciseimage/?is_main=True&limit=200";
        axios.get(imageUrl)
        .then(res => {
            this.setState({
                exerciseImages: res.data.results
            })
        })

        this.linkExerciseToImages();

    }

    linkExerciseToImages = () => {
        var linkedExercises = 0;
        for(var i = 0; i < this.state.exercises.length; i++) {
            for(var j = 0; j < this.state.exerciseImages.length; j++) {
                if(this.state.exercises[i].id == this.state.exerciseImages[j].exercise) {
                    linkedExercises++;
                }
            }
        }
        this.setState({
            renderExercises: linkedExercises
        })
    }

    render() {
        return(
            <div className="container">
                <h2 style={heading}>{this.state.category} Exercises</h2>
                <Table>

                    <tbody>
                        {this.state.exercises.map(exercise=>
                            <tr key={exercise.id}>
                                <td>{exercise.name}</td>
                                {this.state.exerciseImages.map(image=>
                                    {
                                        if(image.exercise == exercise.id)
                                            return(
                                                <td key={image.id}>
                                                    <img style={img} src={image.image}></img>
                                                </td>
                                            );
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
