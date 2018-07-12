import React from 'C:/Users/任浩/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';


export default class Bt extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            value1: "THIS IS A TEXT INPUT",
            value2: ""
        }
    }

    handleChange (event) {
        this.setState ({value1: event.target.value})
    };

    handleChange2 (event) {
        let newVal = event.target.value;
        this.setState (function (prevState, props) {
            return {
                value2: newVal
            }
        })
    };
    
    render () {
        return (
            <div className="container-fluid">
                <h4>直接引入bt.css, 可以使用bt样式表， 对于设计到dom部分的bt， 不可使用。（react提倡少用dom直接操作）</h4>
                <div className="row">
                    <div className="col-md-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    panel
                                </h4>
                            </div>
                            <div className="panel-body">
                            ...
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    panel
                                </h4>
                            </div>
                            <div className="panel-body">
                            ...
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    panel
                                </h4>
                            </div>
                            <div className="panel-body">
                            ...
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    panel
                                </h4>
                            </div>
                            <div className="panel-body">
                            ...
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-warning">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    panel
                                </h4>
                            </div>
                            <div className="panel-body">
                            ...
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb20">
                    <div className="col-md-12">
                        <button className="btn btn-primary mr5">primary</button>
                        <button className="btn btn-success mr5">success</button>
                        <button className="btn btn-info mr5">info</button>
                        <button className="btn btn-warning mr5">warning</button>
                        <button className="btn btn-danger mr5">danger</button>
                        <button className="btn btn-default mr5">default</button>
                    </div>
                </div>

                <div className="row mb20">

                    <div className="col-md-6">
                        <input type="text" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.value1} />
                    </div>

                    <div className="col-md-6">
                        <select className="form-control">
                            <option value="">apple</option>
                            <option value="">orange</option>
                            <option value="">banana</option>
                        </select>
                    </div>

                    <div className="col-md-6 mt20">
                        <div className="input-group">
                            <input type="text" className=" form-control" onChange={this.handleChange2.bind(this)} value={this.state.value2} />
                            <div className="input-group-addon">
                                <span className="glyphicon glyphicon-search"></span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row mb20">
                    <div className="col-md-12">
                        <div className="well">THIS IS A WELL</div>
                    </div>
                </div>

                <div className="row mb20">
                    <div className="col-md-12">
                        <span className="glyphicon s24 mr10 glyphicon-asterisk"></span>
                        <span className="glyphicon s24 mr10 glyphicon-plus"></span>
                        <span className="glyphicon s24 mr10 glyphicon-minus"></span>
                        <span className="glyphicon s24 mr10 glyphicon-music"></span>
                        <span className="glyphicon s24 mr10 glyphicon-search"></span>
                        <span className="glyphicon s24 mr10 glyphicon-heart"></span>
                        <span className="glyphicon s24 mr10 glyphicon-star"></span>
                        <span className="glyphicon s24 mr10 glyphicon-th"></span>
                        <span className="glyphicon s24 mr10 glyphicon-ok"></span>
                        <span className="glyphicon s24 mr10 glyphicon-remove"></span>
                        <span className="glyphicon s24 mr10 glyphicon-off"></span>
                        <span className="glyphicon s24 mr10 glyphicon-cog"></span>
                    </div>
                </div>
            </div>
        )
    }
}