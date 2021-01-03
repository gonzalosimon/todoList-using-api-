import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles/main.css";
import "./App.css";
import "./index.css";
import "./styles/main.css";
import axios from "axios";

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
      <div className="items-center justify-centerbg-teal-lightest">
        <ul className="rounded-t-sm">
          {this.props.items.map((item, index) => (
            <li className="flex mb-6 items-center pt-2" key={index}>
              <button
                onClick={() => {
                  this.toggleItem(item);
                }}
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500"
              >
                Done
              </button>
              <button
                onClick={() => {
                  this.removeItem({ item });
                }}
                className="mr-4 flex-no-shrink border-2 text-red-500 border-red-500 p-2 ml-2 rounded hover:text-white hover:bg-red-500"
              >
                Remove
              </button>
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.title}
              </span>
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
