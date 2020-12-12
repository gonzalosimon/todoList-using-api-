import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  receivedData() {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((result) => {
      const data = result.data;
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
      });
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  // this method works as a callback function to removeTodo
  removeItem(item) {
    this.props.removeTodo(item);
  }

  // callback function to pass state back up to parent component
  toggleItem(item) {
    this.props.toggleTodo(item);
  }

  render() {
    return (
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <ul>
          {this.props.items.map((item, index) => (
            <li className="form-check" key={index}>
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.title}
              </span>
              <input
                onChange={() => {
                  this.toggleItem(item);
                }}
                type="checkbox"
                checked={item.completed}
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
              />
              <button
                onClick={() => {
                  this.removeItem({ item });
                }}
                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStatetoProps)(List);
