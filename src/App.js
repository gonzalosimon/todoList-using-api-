import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todo from './FistPage.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
      render() {
        return (
          <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">ListApp</Link>
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
                      <Link to="/FirstPage" className="nav-link">Log In</Link>
              </form>
    
              <ul className="navbar-nav mr-auto">
                  </ul>
              <br/>
              <Route path="/FirstPage" exact component={Todo} />
            </div>
          </Router>
        );
      }
    }
    
    export default App;