import React, { Component } from "react";
import { connect } from "react-redux";
import "tailwindcss/tailwind.css";

class List extends Component {
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
      <div>
        <ul className="rounded-t-sm">
          {this.props.items.map((item, index) => (
            <li className="flex mb-6 items-center pt-2">
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
