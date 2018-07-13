// 引入依赖
import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';

// 引入样式表和图片
import "./left.css";
import arrowleft from "./arrowleft.png";

// 定义类组建并暴露出去
export default class Left extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            leftList: [
                {
                    name: "说明",
                    cur: true,
                    hreflink: "/"
                },
                {
                    name: "bootstrap",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "ECHARTS图表",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "动画示例",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "grid表单",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "地图",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "drag",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "touch",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "modal",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "loading",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "tree",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "ajax & fetch & axios",
                    cur: false,
                    hreflink: "/"
                }
            ]
        };
    };

    // 变更当前导航item
    changeItem(_index){
        this.setState (function (prevState, props) {
            let newList = [];
            newList.length = prevState.leftList.length;
            for (let i=0; i<prevState.leftList.length; i++) {
                newList[i] = {
                    name: prevState.leftList[i].name,
                    cur: false
                }
            };
            newList[_index].cur = true;
            return {
                leftList: newList
            }
        });
    };

    render () {
        
        const listItems = this.state.leftList.map((listItem, index) => {
            if (listItem.cur === true) {
                return <li className="cur" key={index} onClick={this.changeItem.bind(this, index)}>
                            {index + 1}，{listItem.name}
                            <img className="pull-right mt2" src={arrowleft} alt=""/>
                        </li>
            } else {
                return <li key={index} onClick={this.changeItem.bind(this, index)}>
                            {index + 1}，{listItem.name}
                            <img className="pull-right mt2 dp-none" src={arrowleft} alt=""/>
                        </li>
            }
        });

        return (
            <Scrollbars className="Left" autoHide autoHideTimeout={1000} autoHideDuration={200}>
                <div className="Left">
                    <ul className="list-unstyled">
                        {listItems}
                    </ul>
                </div>
            </Scrollbars>
        )
    };
}

