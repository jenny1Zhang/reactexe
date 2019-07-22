import React from 'react';
import { Slider, InputNumber, Input, Row, Col } from 'antd';

export default class Sets extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 1,
      value2: [1,2]
    }
  }

  change = value => {
    this.props.doChange(value)
    this.setState({
      value: value
    })
  }

  change2 = value => {
    // console.log(value)
    this.setState({
      value2: value
    })
  }

  change3 = value => {
    // console.log(value)
    value = typeof value === 'number' ? value : 0;
    let val2 = this.state.value2[1];
    this.setState({
      value2: [value, val2]
    })
  }

  change4 = value => {
    // console.log(value)
    value = typeof value === 'number' ? value : 0;
    let val1 = this.state.value2[0];
    this.setState({
      value2: [val1, value]
    })
  }

  render(){
    return(
      <div id="setsbox">
        <Row>
          <Col span={19}>
            <Slider min={1} max={10} value={typeof this.state.value === 'number' ? this.state.value : 0} onChange={this.change} />
          </Col>
          <Col span={4} offset={1}>
            <InputNumber min={1} max={10} value={this.state.value} onChange={this.change} />
          </Col>
        </Row>
        <Row>
          <Col span={19}>
            <Slider min={1} max={30} value={this.state.value2} range onChange={this.change2} />
          </Col>
          <Col span={2} offset={1}>
            <InputNumber min={1} max={30} value={this.state.value2[0]} onChange={this.change3} />
          </Col>
          <Col span={2}>
            <InputNumber min={1} max={30} value={this.state.value2[1]} onChange={this.change4} />
          </Col>
        </Row>
      </div>
    )
  }
}
