import React from 'react';
import List from './List';
import { connect } from 'react-redux';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';
import { fetchTodos } from './fetchTodos';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
       value: ''
    }

    //bind methods to the constructor
    this.addTodo = this.addTodo.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(fetchTodos());
  }

  //Agregar todo
  addTodo(e) {
    e.preventDefault();
    this.props.dispatch({ 
      type: ADD_TODO,
      title: this.state.value,
      id: new Date(),
      completed: false
    });
    this.setState({value: ''}) //limpiar input luego de agregar

  }

  // method to handle form input
  // keep using local state for this, no need for redux
  handleOnChange(e){
    this.setState({
      value: e.target.value
    })
  }

  //method to remove a todo item from todos array (eliminar todo item)
  removeTodo(todo) {
    this.props.dispatch({ 
      type: REMOVE_TODO,
      id: todo.item.id,
    });

  }

  // alternar estado to-do
  toggleTodo(todo) {
    console.log(todo)
    this.props.dispatch({
      type: TOGGLE_TODO,
      id: todo.id
    })

  }

  render() {
    const { error, loading } = this.props
    
    if (error) {
      return(<div>Error! {error.message}</div>)
    }
    if (loading) {
      return(<div>Loading...</div>)
    }

    return (
      <div className="container">
         <div className="page-content page-container" id="page-content">
             <div className="padding">
                 <div className="row container d-flex justify-content-center">
                     <div className="col-lg-12">
                         <div className="card px-3">
                             <div className="card-body">
                                 <h4 className="header card-title">Todo list</h4>
                                 <form onSubmit={this.addTodo}>
                                   <input 
                                     type="text" 
                                     placeholder="What do you need to do?" 
                                     className="myInput form-control todo-list-input inputbox" 
                                     value={this.state.value}
                                     onChange={this.handleOnChange}
                                   /> 
                                   <input type="submit" className="button addBtn add btn-primary font-weight-bold todo-list-add-btn" value="Add!" />
                                 </form>
                                 <div className="add-items d-flex">
                                 
                                 <div className="list-wrapper">
                                 <br/>
                                 <List items={this.props.todos} removeTodo={this.removeTodo} toggleTodo={this.toggleTodo} />
                                 
                                 </div>
                             </div>
                         </div>
                     </div>
                    </div>
                 </div>
             </div>            
         </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    todos: state.todos,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStatetoProps)(App);