import React from "react";
import echarts from "echarts";
import './myechart.css';

export default class MyEchart extends React.Component{
    componentDidMount () {
        // 基于准备好的dom，初始化echarts
        let mychart = echarts.init(document.getElementById('showEchart'));
        let mychart2 = echarts.init(document.getElementById('showEchart2'));
        let mychart3 = echarts.init(document.getElementById('showEchart3'));
        let mychart4 = echarts.init(document.getElementById('showEchart4'));
        // 绘制图标
        mychart.setOption({
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'邮件营销',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'bar',
                    stack: '广告',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'bar',
                    stack: '广告',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'搜索引擎',
                    type:'bar',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'百度',
                    type:'bar',
                    barWidth : 5,
                    stack: '搜索引擎',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name:'谷歌',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'必应',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'其他',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        });
        mychart2.setOption({
            title : {
                text: '南丁格尔玫瑰图',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'半径模式',
                    type:'pie',
                    radius : [20, 110],
                    center : ['25%', '50%'],
                    roseType : 'radius',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
                    ]
                },
                {
                    name:'面积模式',
                    type:'pie',
                    radius : [30, 110],
                    center : ['75%', '50%'],
                    roseType : 'area',
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
                    ]
                }
            ]
        });
        mychart3.setOption({
            title: {
                text: '浏览器占比变化',
                subtext: '纯属虚构',
                top: 10,
                left: 10
            },
            tooltip: {
                trigger: 'item',
                backgroundColor : 'rgba(0,0,250,0.2)'
            },
            legend: {
                type: 'scroll',
                bottom: 10,
                data: (function (){
                    var list = [];
                    for (var i = 1; i <=28; i++) {
                        list.push(i + 2000 + '');
                    }
                    return list;
                })()
            },
            visualMap: {
                top: 'middle',
                right: 10,
                color: ['red', 'yellow'],
                calculable: true
            },
            radar: {
               indicator : [
                   { text: 'IE8-', max: 400},
                   { text: 'IE9+', max: 400},
                   { text: 'Safari', max: 400},
                   { text: 'Firefox', max: 400},
                   { text: 'Chrome', max: 400}
                ]
            },
            series : (function (){
                var series = [];
                for (var i = 1; i <= 28; i++) {
                    series.push({
                        name:'浏览器（数据纯属虚构）',
                        type: 'radar',
                        symbol: 'none',
                        lineStyle: {
                            width: 1
                        },
                        emphasis: {
                            areaStyle: {
                                color: 'rgba(0,250,0,0.3)'
                            }
                        },
                        data:[
                          {
                            value:[
                                (40 - i) * 10,
                                (38 - i) * 4 + 60,
                                i * 5 + 10,
                                i * 9,
                                i * i /2
                            ],
                            name: i + 2000 + ''
                          }
                        ]
                    });
                }
                return series;
            })()
        });
        mychart4.setOption({
            title: {
                text: 'Graph 简单示例'
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series : [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    data: [{
                        name: '节点1',
                        x: 300,
                        y: 300
                    }, {
                        name: '节点2',
                        x: 800,
                        y: 300
                    }, {
                        name: '节点3',
                        x: 550,
                        y: 100
                    }, {
                        name: '节点4',
                        x: 550,
                        y: 500
                    }],
                    // links: [],
                    links: [{
                        source: 0,
                        target: 1,
                        symbolSize: [5, 20],
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 5,
                                curveness: 0.2
                            }
                        }
                    }, {
                        source: '节点2',
                        target: '节点1',
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        lineStyle: {
                            normal: { curveness: 0.2 }
                        }
                    }, {
                        source: '节点1',
                        target: '节点3'
                    }, {
                        source: '节点2',
                        target: '节点3'
                    }, {
                        source: '节点2',
                        target: '节点4'
                    }, {
                        source: '节点1',
                        target: '节点4'
                    }],
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                }
            ]
        })
    };
    render () {
        return (
            <div className="MyEchart container-fluid mb50 mt50">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mychartbox" id="showEchart"></div>
                    </div>
                </div> 
                <div className="row mt50">
                    <div className="col-md-12">
                        <div className="mychartbox" id="showEchart2"></div>
                    </div>
                </div> 
                <div className="row mt50">
                    <div className="col-md-6">
                        <div className="mychartbox" id="showEchart3"></div>
                    </div>
                    <div className="col-md-6">
                        <div className="mychartbox" id="showEchart4"></div>
                    </div>
                </div>
            </div>
        )
    }
}