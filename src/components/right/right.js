// 引入依赖
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

// 引入其他组建
import Istruction from './../instruction/instruction';
import Bt from './../bt/bt';
import MyEchart from "./../echart/myechart";
import Donghua from "./../donghua/donghua";
import Error from "./../Error/Error";
import Ajax from "./../ajax/ajax"

// 引入样式表
import "./right.css";

// 定义组建并暴漏出去
export default class Right extends React.Component{
    render () {
        return (
            <Scrollbars className="Right" autoHide autoHideTimeout={1000} autoHideDuration={200}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Istruction}/>
                        <Route exact path="/bt" component={Bt}/>
                        <Route exact path="/mychart" component={MyEchart}/>
                        <Route exact path="/donghua" component={Donghua}/>
                        <Route exact path="/ajax" component={Ajax}/>
                        <Route path="/error" component={Error}/>
                        <Route path="*" render={() => <Redirect to='/error'/>}/>
                    </Switch>
                </Router>
            </Scrollbars>
        )
    }
}