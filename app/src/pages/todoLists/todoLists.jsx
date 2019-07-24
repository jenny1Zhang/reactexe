import React from 'react';
import Top from './components/top'
import ListBox from './components/ListBox'
import AddTodo from './components/addTodo'

export default class TodoListsPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="todoListPage">
        <Top />
        <ListBox />
        <AddTodo />
      </div>
    )
  }

}
