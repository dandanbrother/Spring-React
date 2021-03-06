import React, { Component } from 'react';

import './App.css';
import Dashboard from './comments/Dashboard';
import Header from './comments/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from './comments/Project/AddProject';
import {Provider} from "react-redux";
import store from "./store";
import UpdateProject from './comments/Project/UpdateProject';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
            <Route exact path="/updateProject/:id" component={UpdateProject} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
