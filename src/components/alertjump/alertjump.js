import React from 'react';
import './alertjump.css';

export default class AlertJump extends React.Component{
    render () {
        return (
            <div className="Alert-jump">
                <div className="Alert-content">
                    {this.props.msg}
                </div>
            </div>
        )
    }
}