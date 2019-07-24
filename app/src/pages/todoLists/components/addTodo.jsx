import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../../../actions'

@connect(
    (dispatch) => ({ dispatch: dispatch })
)

export default class AddTodo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let input;
    return (
      <div>
  			<form onSubmit={ e => {
  				e.preventDefault();
  				if (!input.value.trim())
  				{ return }
  				this.props.dispatch(addTodo(input.value))
  			  input.value = ""
  			}}>
  				<input placeholder="你想做点什么" ref={r => input = r} className="todo-input" />
  				<button type="submit" className="todo-btn">
  					添加任务
  				</button>
  			</form>
  		</div>
    )
  }
}
