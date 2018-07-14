import React from "react";
import ReactDOM from 'react-dom';
import "./modal.css"

const modalroot = document.getElementById('root');

class Modal2 extends React.Component{
    constructor(props){
        super(props);
        this.el = document.createElement('div');
    };

    componentDidMount () {
        modalroot.appendChild(this.el);
    };

    componentWillUnmount () {
        modalroot.removeChild(this.el);
    }

    render () {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }

}

export default class Modal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {clicks: 0};
    };

    handleClick () {
        // this will fire when the button in Child is clicked
        // updating Parents`s state, even though button
        // is not direct descendant in the DOM
        this.setState(function (prevState) {
            return {clicks: prevState.clicks + 1}
        });
    }

    render () {
        return (
            <div onClick={this.handleClick.bind(this)}>
                <p>Number of clicks : {this.state.clicks}</p>
                <p>
                open up the browser DevTools to observe that the button is not a child of the div with the onClick handle.
                </p>
                <Modal2>
                    <Child />
                </Modal2>
            </div>
        )
    }
};

function Child () {
    // The cliak even on this button will bubble up to parent,
    // bacause there is no 'onClick' attribute define
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    )
}