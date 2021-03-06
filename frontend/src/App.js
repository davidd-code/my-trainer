import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import LandingPage from './components/landing';
import ExercisesPage from './components/exercises';
import ExerciseListPage from './components/exerciseList';
import WorkoutListPage from './components/workoutList';
import WorkoutCategoryPage from './components/workoutCategory';
import WorkoutExercisesPage from './components/workoutExercises';
import WorkoutStartPage from './components/workoutStart';
import WorkoutLogPage from './components/logList';
import LogDatePage from './components/logData';
import ExerciseDataPage from './components/exerciseTableData'

function App() {
  return (
      <Router>
          <Header/>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/exercises" exact component={ExercisesPage}/>
          <Route path="/exercises/:category" exact component={ExerciseListPage}/>
          <Route path="/workout/" exact component={WorkoutListPage}/>
          <Route path="/workout/create" exact component={WorkoutCategoryPage}/>
          <Route path="/workout/create/:category" exact component={WorkoutExercisesPage}/>
          <Route path="/workout/start/:id" exact component={WorkoutStartPage}/>
          <Route path="/log/" exact component={WorkoutLogPage}/>
          <Route path="/log/:id" exact component={LogDatePage}/>
          <Route path="/log/exercise/:id" exact component={ExerciseDataPage}/>
      </Router>

  );
}

export default App;
