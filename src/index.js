// 引入依赖文件
import React from 'react';
import ReactDOM from 'react-dom';

// 引入公用样式表
import "./bootstrap/css/bootstrap.min.css";
import "./utils/self.css";
import "./index.css";

// 引入页面组件
import Home from './pages/Home/Home';

// 用于后端服务， 可删除
import registerServiceWorker from './registerServiceWorker';

// 配置路由并渲染页面
ReactDOM.render(
    <Home />, 
    document.getElementById('root'));

registerServiceWorker();
