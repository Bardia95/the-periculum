import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;



