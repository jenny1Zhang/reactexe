import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: sessionStorage.getItem('selectedKey')?sessionStorage.getItem('selectedKey'):'1',
            openKeys: [],
            firstHide: true,
        }
    }
    componentDidMount(){
      // console.log(1)
    }
    componentWillUnmount(){
      // console.log(2)
      sessionStorage.setItem('selectedKey', 1)
    }
    handleClick = (e) => {
        this.setState({
           current: e.key,
           openKeys: e.keyPath.slice(1)
        });
        sessionStorage.setItem('selectedKey', e.key)
    }

    onToggle = v => {
        // console.log('onToggle:',v);
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };

    render() {
        return (
            <div id="topMenu">
                <img src={require('../images/logo.png')} width="50" id="logo"/>  {/*logo图标*/}
                <Menu onClick={this.handleClick}
                    openKeys={this.state.firstHide ? null : [this.state.openKey]}
                    onOpenChange={this.onToggle}
                    selectedKeys={[this.state.current]}
                    theme="light"
                    mode="horizontal">
                    <Menu.Item key="1">
                        <IndexLink to="/"><span>欢迎页</span></IndexLink>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span>导航一</span>}>
                        <Menu.Item key="2"><Link to="/profile">小应用</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/todolists">todoLists</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span>导航二</span>}>
                        <Menu.Item key="4"><Link to="/campaign">广告系列</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/steps">接入进度</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span>导航三</span>}>
                        <Menu.Item key="6"><Link to="/barChart">柱状图</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
