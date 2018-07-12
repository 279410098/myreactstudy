// 引入依赖文件
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

// 引入公用样式表
import "./bootstrap/css/bootstrap.min.css";
import "./utils/self.css";
import "./index.css";

// 引入页面组件
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Error from './pages/Error/Error';

// 用于后端服务， 可删除
import registerServiceWorker from './registerServiceWorker';

// 配置路由并渲染页面
ReactDOM.render(
    (
        <Router>
            <div className="routediv">
                <Switch>
                    {/* route 方法1： component */}
                     <Route exact path="/" component={Home}/>

                    {/* route 方法2： render */}
                    <Route path="/news" render ={(props) => <News {...props} />}/>

                    {/* 404 页面 */}
                    <Route path="/error" component={Error}/>
                    
                    {/* 错误页面重定向 */}
                    <Route path="*" render={() => <Redirect to='/error'/>}/>

                    {/* route 方法3： children（暂无） */}
                </Switch>
            </div>
        </Router>
    ), 
    document.getElementById('root'));

registerServiceWorker();
