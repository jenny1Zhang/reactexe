import React from 'react';
import Links from './links'

export default class Top extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="todo-tab">
    		<Links filter="SHOW_ALL">
    			全部任务
    		</Links>
    		<Links filter="SHOW_ACTIVE">
    			待办任务
    		</Links>
    		<Links filter="SHOW_COMPLETED">
    			已完成任务
    		</Links>
    	</div>
    )
  }

}
