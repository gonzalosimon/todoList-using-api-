import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/main.css";
import "./index.css";
import Home from "./Home.js";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "./styles/main.css";

class App extends Component {
  render() {
    return (
      <div>
          <TextField
            name="email"
            type="email"
            label="Email"
            value="email@email.com"
            className="mt-16 max-w-lg py-1 px-1 text-sm text-gray-600 text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          <TextField
            value="*************"
            name="password"
            label="Password"
            type="password"
            className="mt-16 max-w-lg py-1 px-1 text-sm text-gray-600 text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        <br />
        <br />
        <Router>
          <div>
            <Link
              className="items-center justify-center justify-center border-2 text-blue-600 border-blue-300 p-2 rounded hover:text-white hover:bg-blue-300"
              to="/Home"
            >
              Submit
            </Link>
            <Switch>
              <Route exact path="/Home">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
