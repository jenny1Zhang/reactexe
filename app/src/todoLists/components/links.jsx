import React from 'react';
import { connect } from 'react-redux'
import { setVisibility } from "../../actions"

@connect(
  (state, ownProps) => {
    // console.log(1111,ownProps)
    // console.log(2222,state)
  	return {
  		active: ownProps.filter === state.visibilityFilter
  	}
  },
  (dispatch, ownProps) => {
  	return {
  		onTodoClick: () => {
  			dispatch(setVisibility(ownProps.filter))
  		}
  	}
  }
)

export default class Links extends React.Component{
  constructor(props){
    super(props);
    // console.log(333,props)
  }

  render(){
    return(
      <div className="todo-tab_item">
        <a href = "#" style={{ color: this.props.active? '#f01414' : '#4d555d' }}
          onClick = {
            e => {
              e.preventDefault()
              this.props.onTodoClick()
            }
          }>
          {this.props.children}
        </a>
      </div>
    )
  }

}
