import React from "C:/Users/任浩/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
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
        console.log($("#idtest").prev().val());
    };

    render () {
        return (
            <div className="container-fluid mb50">
                <div className=" row">
                    <div className=" col-md-12">
                        <div className={" input-group pull-right " + this.state.status}>
                            <input type="text" className=" form-control" value={this.state.iptval} onChange={this.getChange.bind(this)} onFocus={this.getLarge.bind(this)} onBlur={this.getNormal.bind(this)} />
                            <div className=" input-group-addon" id="idtest" onClick={this.showVal.bind(this)}>
                                <span className=" glyphicon glyphicon-search"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}