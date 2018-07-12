// 引入组建所需要的依赖
import React from 'react';
// 引入当前页面样式表
import './top.css'

// 定义全局变量， 存储当前计时器， 便于组建卸载的时候清除
var jsq;

// 定义组建，并向外暴露
export default class Top extends React.Component {
    constructor(props) {
        super(props);
        // state 设置当前时间属性
        this.state = {
            curDate : ""
        };
    };

    // 获取时间日期并转换成本地时间
    getdate () {
        jsq = setInterval(()=>{
            this.setState({
                curDate: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
            })
        },1000)
    };

    // 组建挂在
    componentDidMount() {
        this.getdate()
    }

    // 卸载组建时，一定要取消componentDidMount里面的操作
    componentWillUnmount () {
        clearInterval(jsq)
    };

	render () {
        return (
            <div className='Top'>
                <span className="pl10">欢迎您体验， 现在时间是：</span>
                <span>{this.state.curDate}</span>
                <span className="pull-right pl5 pr15">退出</span>
                <span className="pull-right pl5 pr5">登录</span>
            </div>
        )
    }
}