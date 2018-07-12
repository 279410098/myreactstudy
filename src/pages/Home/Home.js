// 引入依赖文件
import React from "react";
import Top from "../../components/top/top";
import App from "../../components/App/App";
import Left from "../../components/left/left";
import TopNav from "../../components/topnav/topnav";

// 引入当前页面样式表
import "./Home.css"

// 定义组建并暴露
export default class Home extends React.Component{
    render () {
        return (
            <div className="homepage">
                <div className="top">
                    <Top />
                </div>
                <div className="app">
                    <App />
                </div>
                <div className="topnav">
                    <TopNav />
                </div>
                <div className="left">
                    <Left />
                </div>
            </div>
        )
    }
}