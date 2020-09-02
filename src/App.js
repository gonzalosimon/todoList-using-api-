import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todo from './FirstPage.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
      render() {
        return (
          <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">TodoApp</Link>
              </nav>
              <form>
                <label>
                  Email:
                  <input type="text" placeholder="email@email.com" name="name" />
                </label>
                <label> <br></br>
                  Password:
                  <input type="text" placeholder="**************" name="name" />
                </label>
                      <Link to="/first" className="nav-link">Log In</Link>
              </form>
    
              <ul className="navbar-nav mr-auto">
                  </ul>
              <br/>
              <Route path="/first" component={Todo} />
            </div>
          </Router>
        );
      }
    }
    
    export default App;