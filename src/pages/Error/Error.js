// 导入依赖文件
import React from "react";

// 引入当前页面样式表
import "./Error.css"

// 导入当前组建需要的图片
import pander from "./165582258.jpg"

// 创建页面组建并暴露出去
export default class Error extends React.Component {
    render () {
        return (
            <div className="Error">
                <img src={pander} alt=""/>
            </div>
        )
    }
}