import React from 'react';
import { Form, Cascader } from 'antd';

const FormItem =  Form.Item;

class SeleCity extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cData: []
    }
  }

  componentDidMount() {
      this.fetchCityData();
  }

  fetchCityData = () => {
      fetch('../data/cityData.json')
          .then((res) => { return res.json(); })
          .then((data) => { this.setState({cData:data}); })
          .catch((e) => { console.log(333,e);});
  }


 change(val){
    console.log(val)
  }

  getItemsValue = ()=>{
     const valus= this.props.form.getFieldsValue();
     console.log('formvalue:',valus)
     return valus;
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div id="selectcitybox">
        <Form>
          <FormItem label="地址1:">
            {getFieldDecorator('address1')(<Cascader style={{width:280}} size="large" options={this.state.cData} onChange = {this.change} />)}
          </FormItem>
          <FormItem label="地址2:">
            {getFieldDecorator('address2')(<Cascader style={{width:280}} size="large" options={this.state.cData} onChange = {this.change} />)}
          </FormItem>
        </Form>

      </div>
    )
  }
}

let SelectCity = Form.create()(SeleCity);
export default SelectCity;
