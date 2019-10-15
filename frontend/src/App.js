import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import LandingPage from './components/landing';
import ExercisesPage from './components/exercises';
import ExerciseListPage from './components/exerciseList';
import WorkoutListPage from './components/workoutList';
import WorkoutCreatePage from './components/workoutCreate';
import WorkoutExercisesPage from './components/workoutExercises';

function App() {
  return (
      <Router>
          <Header/>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/exercises" exact component={ExercisesPage}/>
          <Route path="/exercises/:category" exact component={ExerciseListPage}/>
          <Route path="/workout/" exact component={WorkoutListPage}/>
          <Route path="/workout/create" exact component={WorkoutCreatePage}/>
          <Route path="/workout/create/:category" exact component={WorkoutExercisesPage}/>
      </Router>

  );
}

export default App;
