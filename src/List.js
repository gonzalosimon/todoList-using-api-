import React from 'react';
import { connect } from 'react-redux';
import './App.css';


class List extends React.Component {

	// este método es como una función callback, a removeTodo 
	removeItem(item) {
		this.props.removeTodo(item)
	}

	// callback function to pass state back up to parent component
	toggleItem(item) {
		this.props.toggleTodo(item)
	}

	render() {
		return(
			<div>
			<ul>
			{this.props.items.map((item, index) => (
				<li key={index}>
					<input type="checkbox" checked={item.completed} onChange={() => {this.toggleItem(item)}} />
					<span style={{textDecoration: item.completed ? 'line-through': 'none' }} >
					{item.title}
					</span>
					<button 
					className="button-close" 
					onClick={
						() => {this.removeItem({item})}
					}>X</button>
				</li>
			))}
			</ul>
			</div>
		)
	}
}

function mapStatetoProps(state) {
  return {
    todos: state.todos,
  }
}

export default connect(mapStatetoProps)(List);