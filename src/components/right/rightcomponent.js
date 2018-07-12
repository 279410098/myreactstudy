import React from "react";

import "./rightcomponent.css";

import Istruction from './../instruction/instruction';
import Bt from './../bt/bt';
import MyEchartComponent from "./../echart/myechart";
import Donghua from "./../donghua/donghua";

export default class RightComponent extends React.Component{
    render () {
        return (
            <div className="right">
                <Istruction />
                <Bt />
                <MyEchartComponent />
                <Donghua />
            </div> 
        )
    }
}
