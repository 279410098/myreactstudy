// 引入依赖
import React from "react";
import "./instruction.css"

export default class Istruction extends React.Component{
    render () {
        return (
            <div className="Istruction">
                <h4>此DEMO主要目的在于：</h4>
                <ul>
                    <li>1, 整理收集REACT可用的公用方法， 详见于utils.js文件</li>
                    <li>2, 创建公共样式表，整理收集常见可用的UI组件</li>
                    <li>3, 归纳项目开发中经常需要用到的组建，例如： grid， echarts， map， niceScroll， touch，drag， 栅格系统， 等等 </li>
                    <li>4, 将React从入门到熟练，进阶到精通，并对webpack， *-cli， nodejs， npm， git等等前端涉及到的知识点有一个全面的了解和认知</li>
                    <li>6666666</li>
                </ul>
            </div>
        )
    }
}