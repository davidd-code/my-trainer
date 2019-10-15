import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const text = {
    textAlign: "center",
    paddingTop: "2vh",
}

const listGroup = {
    marginTop: "1vh",
    paddingTop: "3vh"
}

class WorkoutCreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseCategories: []
        }
    }

    componentWillMount() {
        // const url = "https://wger.de/api/v2/exercise/?language=2&status=2";
        const url = "https://wger.de/api/v2/exercisecategory/"
        axios.get(url)
        .then(res => {
            console.log(res.data);
            this.setState({
                exerciseCategories: res.data.results
            })
        })
    }

    render() {
        return(
            <div className="container">
                <h2 style={text}>Start a new workout</h2>
                <p style={text}>Start by choosing a muscle category:</p>
                <ListGroup>
                {this.state.exerciseCategories.map(category =>
                    <ListGroup.Item>
                        <Link to={{
                                pathname: "/workout/create/"+category.name,
                                state: {
                                    category: category.name,
                                    categoryId: category.id
                                }
                            }}>{category.name}</Link>
                    </ListGroup.Item>
                )}
                </ListGroup>
            </div>
        )
    }
}

export default WorkoutCreatePage;
