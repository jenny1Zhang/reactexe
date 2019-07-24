import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

// 引入单个页面（包括嵌套的子页面）
import Init from './main.jsx';
import Welcome from './pages/welcome/welcome.jsx';
import Profile from './pages/profile/profile.jsx';
import Steps from './pages/steps/steps.jsx';
import TotoLists from './pages/todoLists/todoLists.jsx';
import Campaign from './pages/campaign/campaign.jsx';
import Edit from './pages/edit/edit.jsx';
import NotFoundPage from './pages/nofind/nofind.jsx';
import Login from './pages/login/login.jsx';
import BarChart from './pages/echarts/bar-chart.jsx';

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
            <Route path="edit/:rowId" component={Edit} />
            <Route path="barChart" component={BarChart} />
            {/* 404 */}
            <Route path='/404' component={NotFoundPage} />
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='/404' />
        </Route>
    </Router>
    , document.querySelector('#init')
)
