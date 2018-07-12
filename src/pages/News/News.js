// 引入依赖文件
import React from "react";
import {Route, NavLink } from 'react-router-dom';

//引入页面组建
import Top from '../../components/top/top';
import App from '../../components/App/App';
import TopNav from '../../components/topnav/topnav';

// 引入当前页面样式表
import "./New.css";

// 定义组建并暴露出去
export default class News extends React.Component{

    componentDidMount () {
        console.log(this.props);
        console.log(this.props.match);
    }

    render () {
        var { match } = this.props;
        return (
            <div className="newspage">
                <div className="top">
                    <Top />
                </div>
                <div className="app">
                    <App />
                </div>
                <div className="topnav">
                    <TopNav />
                </div>
                <div className="container-fluid text-center" style={{marginTop: '240px'}}>
                    <h3>
                        <strong>THIS IS ANOTHER PAGE USED FOR TESTING REACT-ROUTER</strong>
                    </h3>
                </div>

                <div className="newsnav">
                    <NavLink to={`${match.url}/front-end`}>前端技术</NavLink>
                    <NavLink to={`${match.url}/big-data`}>大数据</NavLink>
                    <NavLink to={`${match.url}/algorithm`}>算法</NavLink>
                    <Route path={`${match.path}/:name`} render={(props) => <div>{props.match.params.name}</div>}/>
                </div>

            </div>
        )
    }
}