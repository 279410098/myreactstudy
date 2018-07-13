// 引入依赖文件
import React from "react";
import $ from "jquery";
import axios from 'axios';
import {allBaseurl} from "./../../utils/utils"

// 引入样式表
import "./ajax.css"

// 创建组建并暴漏
export default class Ajax extends React.Component{
    constructor (props) {
        super (props);
        this.state ={
            ajaxtxt: '点击上面的按钮通过jQuery ajax加载数据， 改变state',
            axiostxt: "点击上面的按钮通过axios加载数据， 改变state"
        }
    };

    getDataByAjax() {
        let _this = this;
        $.ajax({
            url: allBaseurl.baseurl1 + "jquery.form.min.js",
            type: 'get',
            success: function (data) {
                _this.setState({
                    ajaxtxt: data
                })
            }
        })
    };

    getDataByAxios () {
        let _this = this;
        axios
            .get(allBaseurl.baseurl1 + 'jquery.form.min.js')
            .then(
                response => {
                    this.msg = response.data
                    _this.setState({
                        axiostxt: response.data
                    })
                }
            )
            .catch(
                error => {
                    _this.setState({
                        axiostxt: error
                    })
                }
            )
    }

    render () {
        return (
            <div className="Ajax">
                <button type="button" className="btn btn-primary mb15" onClick={this.getDataByAjax.bind(this)}>$.ajax loading</button>
                <div className="txtbox">
                    {this.state.ajaxtxt}
                </div>

                <button type="button" className="btn btn-danger mt30 mb15" onClick={this.getDataByAxios.bind(this)}>axios loading</button>
                <div className="txtbox">
                    {this.state.axiostxt}
                </div>
                <p>axios请求可以并发和拦截， 如果组建在请求完成之前被卸载，你可以追踪未完成的请求并在 componentWillUnmount 生命周期方法内将它们取消</p>
                <p>
                    {'componentWillUnmount() {'}
                </p>
                <p className="ml30">
                    {'this.serverRequestName.abort() '}  
                </p>
                <p>
                    {'}'}
                </p>
                
            </div>
        )
    }
}