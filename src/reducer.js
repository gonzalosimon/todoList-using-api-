import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';
import {FETCH_TODOS_BEGIN, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE} from './fetchActions';

//define initial state 
const initialState = {
	todos: [],
    loading: false,
    error: null
    }

// reducer function -- toma el estado actual, acción, devuelve un nuevo estado
export default function reducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_TODOS_BEGIN:
		// actualizar a true
			return {
				...state,
				loading: true,
				error: null
			}

		case FETCH_TODOS_SUCCESS:
		// actualizar a false
		// guardar 'payload'
			return {
				...state,
				loading: false,
				todos: action.payload.todos
			}

		case FETCH_TODOS_FAILURE: 
		// actualizar a false
		// guardar error
			return {
				...state,
				loading: false,
				error: action.payload.error,
				todos: [] //if error, clear the data
			}

		case ADD_TODO:
			console.log(action)
			return Object.assign({}, state, {		
			// necesita usar object.assign y devolver un nuevo objeto, ya que no puede manipular el estado directamente
				todos: [...state.todos, 
				{
					title: action.title,
					id: action.id,
					completed: action.completed
				}
				]})
		
		case REMOVE_TODO:
			return Object.assign({}, state, {
				todos: state.todos.filter(e => e.id !== action.id)
			})
		
		case TOGGLE_TODO:
			return Object.assign({}, state, {		// "clone" el estado actual en un objeto vacío
				todos: state.todos.map((e) => {   	// map sobre "todos array", e={task:, id:, completed:}
					if (e.id === action.id) {	  	// mire cada elemento 'e' para ver si la tarea es = id de la acción
						return Object.assign({}, e, {
							completed: !e.completed  //cambia 'completed' a su opuesto
						})
					}
					return e;						//return the remainder of the array being mapped 
				})
			})

		default:
			return state;
	}
}