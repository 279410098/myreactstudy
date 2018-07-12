import React from "react";
import "./left.css";
import arrowleft from "./arrowleft.png";

export default class Left extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            leftList: [
                {
                    name: "1，说明",
                    cur: true,
                    hreflink: "/"
                },
                {
                    name: "2，bootstrap",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "3，ECHARTS图表",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "4，动画示例",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "5，grid表单",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "6，地图",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "7，drag",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "8，touch",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "9，美化滚动条",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "10，modal",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "11，loading",
                    cur: false,
                    hreflink: "/"
                },
                {
                    name: "12，tree",
                    cur: false,
                    hreflink: "/"
                }
            ]
        };
    };

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
                            {listItem.name}
                            <img className="pull-right mt2" src={arrowleft} alt=""/>
                        </li>
            } else {
                return <li key={index} onClick={this.changeItem.bind(this, index)}>
                            {listItem.name}
                            <img className="pull-right mt2 dp-none" src={arrowleft} alt=""/>
                        </li>
            }
        });

        return (
            <div className="Left">
                <ul className="list-unstyled">
                    {listItems}
                </ul>
            </div>
        )
    };
}

