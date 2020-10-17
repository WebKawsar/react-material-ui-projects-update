import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';




function App() {
  return (
          <Router>
            <p>Under Developed</p>
            <Header></Header>

            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              
            </Switch>
          </Router>
  );
}

export default App;
