import React, { Component } from 'react'
import { connect } from 'react-redux';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
		   offset: 0,
		   data: [],
		   perPage: 5,
		   currentPage: 0
		}
	
		this.handlePageClick = this
		.handlePageClick
		.bind(this);
	}

	receivedData() {
		axios.get(`https://jsonplaceholder.typicode.com/todos`) 
		.then(result => {
				const data = result.data;
				const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
				const postData = slice.map((item, index ) => 
				    <React.Fragment>
			    <ul>
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
			    </ul>
					</React.Fragment>)
						this.setState({
							pageCount: Math.ceil(data.length / this.state.perPage),
						     
							postData
						  })
			  
			  })
	  }

  handlePageClick = (e) => {
	const selectedPage = e.selected;
	const offset = selectedPage * this.state.perPage;

	this.setState({
		currentPage: selectedPage,
		offset: offset
	}, () => {
		this.receivedData()
	});

};
	
// this method works as a callback function to removeTodo 
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
		<ul className="d-flex flex-column-reverse todo-list">
			{this.postData}
		{this.props.items.map((item, index) => (
			<li className="form-check" key={index}>
				<input type="checkbox" className="form-check-label" checked={item.completed} onChange={() => {this.toggleItem(item)}} />
				<span style={{textDecoration: item.completed ? 'line-through': 'none' }} >
				{item.title}
				</span>
				<button 
				className="remove button-close" 
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