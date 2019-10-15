import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const h1 = {
    textAlign: "center",
    paddingTop: "2vh"
}

const listGroup = {
    marginTop: "1vh",
}

class ExercisesPage extends Component {
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
                <h1 style={h1}>Exercises</h1>
                <ListGroup>
                {this.state.exerciseCategories.map(category =>
                    <Link style={listGroup} to={{
                            pathname: "/exercises/"+category.name,
                            state: {
                                category: category.name,
                                categoryId: category.id
                            }
                        }}>
                        <ListGroup.Item>
                            {category.name}
                        </ListGroup.Item>
                    </Link>
                )}
                </ListGroup>
            </div>
        )
    }
}

export default ExercisesPage;
