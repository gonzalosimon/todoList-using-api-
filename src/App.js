import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.css";
import "./index.css";
import Home from "./Components/Home.js";
import Form from "./Components/Form.js";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
          </Switch>
        </Router>
    );
  }
}
export default App;
