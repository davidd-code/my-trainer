import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';
import LandingPage from './components/landing'

function App() {
  return (
      <Router>
          <Navbar/>
          <Route path="/" exact component={LandingPage}/>
      </Router>

  );
}

export default App;
