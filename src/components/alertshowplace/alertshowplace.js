import React from 'react';
import Protal from '../protal/protal';
import AlertJump from './../alertjump/alertjump';

import './alertshowplace.css';

export default class Alertshowplace extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            showbool: false
        };
    };

    handlechange() {
        this.setState((prevState) => ({
            showbool: !prevState.showbool
        }));
    }

    render () {
        let txt = '隐藏';
        if (!this.state.showbool) {
            txt = "隐藏"
        } else {
            txt = "显示"
        } 
        return (
            <div className="Alertshowplace">
                <h4>点击按钮显示隐藏alert弹出框</h4>
                <p>{txt}</p>
                <button type="button" className="btn btn-primary" onClick={this.handlechange.bind(this)}>CLICK HERE TO SHOW ALERT</button>
                <Protal>
                    <AlertJump msg={'SHOW THE ALERT MESSAGE'} alertShowBool={this.state.showbool} onClick={this.handlechange.bind(this)}  />
                </Protal>
            </div>
        )
    }
}