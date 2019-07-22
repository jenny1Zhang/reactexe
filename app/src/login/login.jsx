import React from 'react';
import { Form, Input, Button, notification} from 'antd';
import createHistory from 'history/lib/createHashHistory';

import './login.less'

const FormItem = Form.Item;
const history = createHistory();

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;
        if (n === 'jenny' && p === '123') {
            console.log("登录成功！")
            localStorage.setItem('isLogin', true)
            // 表单的路由处理
            history.push('/');
        } else {
            console.log("登录失败：",n,p)
            this.openNotificationWithIcon('info');
        }
    }

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = (type) => {
        return notification[type]({
                 message: '密码',
                 description: '123',
                 duration: 6
               })
    }

    componentDidMount() {
        this.openNotificationWithIcon('info');
    }

    render() {
        console.log(this.props.form)
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="loginpagewrap">
                <p>登录</p>
                <div id="loginWrap">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('username',{
                              rules: [
                                { required: true, pattern: /^[0-9A-Za-z]{4,10}$/, message: '账号4-10位数字或字母组成' }
                              ]
                            })(<Input placeholder="Username" />)}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password',{
                              rules: [
                                { required: true, min: 3, max: 9, message: '密码3-9个字符' },
                                { pattern: /^[0-9A-Za-z]{3,9}$/, message: '密码3-9位数字或字母组成' }
                              ]
                            })(<Input placeholder="password" />)}
                        </FormItem>
                        <Button type="primary" htmlType="submit" id="loginBtn">Login</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;
