import React from "react";
import "./donghua.css";
// 测试jquery是否能够正常的引用和使用
import $ from "jquery"

export default class Donghua extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            status: "normal",
            iptval: ""
        };
    };

    getChange (event) {
        this.setState ({iptval: event.target.value})
    };

    getLarge () {
        this.setState(function (prevState, props) {
            return {
                status: "normal largeinput"
            }
        })
    };

    getNormal () {
        this.setState(function (prevState, props) {
            return {
                status: "normal"
            }
        })
    };

    showVal () {
        alert('请查看控制台打印， 检测$是否被引入并正确的使用' + this.state.iptval);
        console.log($("#idtest").next().val());
    };

    render () {
        return (
            <div className="Donghua container-fluid mb50">
                <div className=" row">
                    <div className=" col-md-8">
                        <h4 className="mt15 mb15">点击输入框， 查看简单动画效果</h4>
                        <div className={" input-group " + this.state.status}>
                            <div className=" input-group-addon" id="idtest" onClick={this.showVal.bind(this)}>
                                <span className=" glyphicon glyphicon-search"></span>
                            </div>
                            <input type="text" className=" form-control" value={this.state.iptval} onChange={this.getChange.bind(this)} onFocus={this.getLarge.bind(this)} onBlur={this.getNormal.bind(this)} />
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}