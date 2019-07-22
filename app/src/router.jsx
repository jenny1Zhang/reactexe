import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

// 引入单个页面（包括嵌套的子页面）
import Init from './main.jsx';
import Welcome from './welcome/welcome.jsx';
import Profile from './profile/profile.jsx';
import Steps from './steps/steps.jsx';
import TotoLists from './todoLists/todoLists.jsx';
import Campaign from './campaign/campaign.jsx';
import Edit from './edit/edit.jsx';
import Last from './last/last.jsx';
import NotFoundPage from './nofind/nofind.jsx';
import Login from './login/login.jsx';

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/login" component={Login} />
        <Route path="/" component={Init} onEnter={
          (nextState, replaceState)=>{
            if(localStorage.getItem('isLogin')!=='true'){
              replaceState('/login');
            }
          }
        }>
            <IndexRoute component={Welcome}/>
            <Route path="profile" component={Profile} />
            <Route path="steps" component={Steps} />
            <Route path="todoLists" component={TotoLists} />
            <Route path="campaign" component={Campaign} />
            <Route path="last" component={Last} />
            <Route path="edit/:rowId" component={Edit} />
            {/* 404 */}
            <Route path='/404' component={NotFoundPage} />
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='/404' />
        </Route>
    </Router>
    , document.querySelector('#init')
)
