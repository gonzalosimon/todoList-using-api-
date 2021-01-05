import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import TextField from "@material-ui/core/TextField";


class Form extends Component {
  
  render() {
    return (
        <div className="max-w-screen-lg md:mt-20 md:ml-96 pt-48 pl-16 md:pl-64">
          <h1 className="mb-8 text-3xl">Welcome Back!</h1>
          <div>
            <TextField
              name="email"
              type="email"
              label="Email"
              value="email@email.com"
              className="ml-8 max-w-lg py-6 px-6 rounded-lg"
            />
            <TextField
              value="*************"
              name="password"
              label="Password"
              type="password"
              className="ml-8 max-w-lg py-6 px-6 rounded-lg"
            />
            <Link
              className="inline-block mt-1 md:ml-8 items-center justify-center justify-center border-2 text-blue-600 border-blue-300 p-2 rounded hover:text-white hover:bg-blue-300"
              to="/Home"
              type="submit"
            >
              {" "}
              Submit
            </Link>
          </div>
        </div>
    );
  }
}
export default Form;
