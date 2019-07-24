import React from 'react';
import { Form, Input, Button} from 'antd';

const FormItem = Form.Item;

class AdvInfoPage1 extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        data: ''
      }
    }

    getItemsValue = ()=>{    //3、自定义方法，用来传递数据（需要在父组件中调用获取数据）
       const valus= this.props.form.getFieldsValue();       //4、getFieldsValue：获取一组输入控件的值，如不传入参数，则获取全部组件的值
       console.log('formvalue:',valus)
       return valus;
    }

    render() {
      // console.log(this.props.form)
      const { getFieldDecorator } = this.props.form;
      return(
        <div id="advInfobox">
          <p>广告基本信息</p>
          <Form>
            <FormItem>
              {getFieldDecorator('advName')(<Input addonBefore='系列名称' placeholder='' />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('advStatus')(<Input addonBefore='投放状态' placeholder='' />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('limitNum')(<Input addonBefore='投放限额' placeholder='' />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('dateNum')(<Input addonBefore='投放天数' placeholder='' />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('price')(<Input addonBefore='价格' placeholder='' />)}
            </FormItem>
          </Form>
        </div>
      )
    }
}

let AdvInfo = Form.create()(AdvInfoPage1);
export default AdvInfo;
