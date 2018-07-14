import React from 'react';
import Protal from './../protal/protal';
import AlertJump from './../alertjump/alertjump';

import './alertshowplace.css';

export default class Alertshowplace extends React.Component{
    render () {
        return (
            <div className="Alertshowplace">
                <h4>点击按钮显示隐藏alert弹出框</h4>
                <button className="btn btn-primary">toggle</button>
                <Protal>
                    <AlertJump msg={'SHOW THE ALERT MESSAGE'} />
                </Protal>
            </div>
        )
    }
}