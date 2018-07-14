import React from 'react';
import './alertjump.css';

let togglestyle = {
    display:"none"
};

export default class AlertJump extends React.Component{

    stopsomething (event) {
        event.stopPropagation();
    }
    
    render () {

        if (this.props.alertShowBool) {
            togglestyle = {
                display: "flex"
            }
        } else {
            togglestyle = {
                display: "none"
            }
        };

        return (
            <div className={"Alert-jump"} style={togglestyle} onClick={this.props.onClick}>
                <div className="Alert-content" onClick={this.stopsomething.bind(this)}>
                    {this.props.msg}
                </div>
            </div>
        )
    }
}

    //     event.stopPropagation();
    //     event.nativeEvent.stopImmediatePropagation();