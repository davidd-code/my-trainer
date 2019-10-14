import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import LandingPage from './components/landing';
import ExercisesPage from './components/exercises';
import ExerciseListPage from './components/exerciseList'
import WorkoutListPage from './components/workoutList'
import WorkoutCreatePage from './components/workoutCreate'

function App() {
  return (
      <Router>
          <Header/>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/exercises" exact component={ExercisesPage}/>
          <Route path="/exercises/:category" exact component={ExerciseListPage}/>
          <Route path="/workouts/" exact component={WorkoutListPage}/>
          <Route path="/workouts/create" exact component={WorkoutCreatePage}/>
      </Router>

  );
}

export default App;
