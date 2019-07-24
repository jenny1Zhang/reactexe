import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../../actions';

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter(t => t.completed)
		case "SHOW_ACTIVE":
			return todos.filter(t => !t.completed)
	}
}


@connect(
  (state) => {
  	return {
  		todos: getVisibleTodos(state.todos, state.visibilityFilter)
  	}
  },
  (dispatch) => {
  	return {
  		onClick: (id) => {
  			dispatch(toggleTodo(id))
  		},
      onDelete: (id) =>{
        dispatch(deleteTodo(id))
      }
  	}
  }
)

export default class ListBox extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ul className="list-group">
  		 {
  			this.props.todos.map(todo =>
          <li className="todo-list_li" key={todo.id} style={{ textDecoration:todo.completed ? "line-through" : "none" }}>
        		<input type="checkbox" className="pull-left" onClick={()=>this.props.onClick(todo.id)} defaultChecked={todo.completed} />
        		{todo.text}
        		<span className="todo-list_del" onClick={()=>this.props.onDelete(todo.id)}>删除</span>
        	</li>
  			)}
  		</ul>
    )
  }
}
