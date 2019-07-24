import React from 'react';
import { Steps, Button, message, Tabs, Message } from 'antd';

import AdvInfo from './components/advInfo.jsx';
import SelectCity from './components/selectCity.jsx';
import Sets from './components/sets.jsx';

const Step = Steps.Step;
const TabPane = Tabs.TabPane;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];


export default class StepsPage extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        current: 0,
        advInfomation: {
          advname: '',
          advstatus: ''
        },
        sliderValue: 1
      }
    }

    next(){
      console.log('stepsformvalue:',this.formRef.getItemsValue());
      let formvalue = this.formRef.getItemsValue();
      for(var key in formvalue){
        if(!formvalue[key]){
          message.warning('请将信息输入完整！')
          return;
        }
      }
      const current = this.state.current+1;
      this.setState({
        current: current
      })
    }

    prev() {
      const current = this.state.current - 1;
      this.setState({ current });
    }

    changeSlider=num=>{
      console.log('changeslider:',num)
      this.setState({
        sliderValue: num
      })
    }

    done(){
      console.log('sliderNum:',this.state.sliderValue)
      message.success('Processing complete!');
    }


    render(){
      return(
        <div id="stepspagewrap">
          <Steps  current={this.state.current} onChange={this.change}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>

          <Tabs activeKey={this.state.current.toString()}>
            <TabPane tab="First" key="0">

                <AdvInfo wrappedComponentRef={(form) => this.formRef = form} />

            </TabPane>
            <TabPane tab="Second" key="1">

              <SelectCity wrappedComponentRef={(form) => this.formRef = form} />

            </TabPane>
            <TabPane tab="Last" key="2">

              <Sets doChange={this.changeSlider}  />

            </TabPane>
          </Tabs>

          <div className="steps-action">
            {
              this.state.current < steps.length - 1
              &&
              <Button type="primary" onClick={() => this.next()}>Next</Button>
            }
            {
              this.state.current === steps.length - 1
              &&
              <Button type="primary" onClick={() => this.done()}>Done</Button>
            }
            {
              this.state.current > 0
              &&
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            }
          </div>
        </div>
      )
    }
}
