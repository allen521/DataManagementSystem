import echarts from 'echarts'
var option_1 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    textStyle:{
        color:"#aaaaaa"
    },
    xAxis: {
        type: 'category',
        data: ['上海', '广东', '北京', '电商', '重点客户','医保发展'],
        nameRotate:30,
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#aaaaaa',
                width:'1'
            }
        },
        axisLabel: {
            interval:0,
            rotate:20
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#aaaaaa',
                width:'1'
            }
        },
        splitLine:{
            lineStyle: {
                color: ['rgba(163,216,252,0.20)']
            }
        },
        axisLabel: {
            textStyle: {
                color: '#aaaaaa'
            }
        }
    },
    grid: {
        left:45,
        right:10,
        top:30,
        bottom:30,
        containLabel:false,
        show:'true',
        borderWidth:'0'
    },
    series: [{
        data: [1200, 1500, 1450, 1500, 1700, 1610],
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                      '#46ADEA','#E97F40','#F0AA20','#85CB99','#71CFE4',
                       '#F4D159','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                       '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                    ];
                    return colorList[params.dataIndex]
                }
            }
        },
        barWidth:8,
    }]
    // color:["#46ADEA","#E97F40","#F0AA20","#85CB99","#71CFE4","#F4D159"]
};
var option_2 = {
    textStyle:{
        color:"#aaa"
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        textStyle:{
            color:"#aaa"
        },
        data:['计划','完成','完成率']
    },
    grid: {
        top:30,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['01','02','03','04','05','06','07'],
            splitLine:{
                lineStyle: {
                    color: ['rgba(163,216,252,0.20)']
                }
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine:{
                lineStyle: {
                    color: ['rgba(163,216,252,0.20)']
                }
            },
        }
    ],
    series : [
        {
            name:'完成',
            type:'bar',
            itemStyle:{
                color:'#85CB99'
            },
            stack: '计划',
            data:[180, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'计划',
            type:'bar',
            itemStyle:{
                color:'#71CFE4'
            },
            stack: '计划',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'完成率',
            type:'line',
            itemStyle:{
                color:'rgba(255,255,255,0.50)'
            },
            stack: '完成率',
            data:['10', '20','100', '200', '19', '33','123']
        }
    ]
};
var option_3= {
    textStyle:{
        color:"#aaa"
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        data: ['a', 'b','c','d','e']
    },
    grid: {
        top:"40px",
        left: '3%',
        right: '20px',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#aaaaaa',
                width:'1'
            }
        },
        splitLine:{
            lineStyle: {
                color: ['rgba(163,216,252,0.20)']
            }
        },
    },
    yAxis: {
        type: 'category',
        data: ['a','b','c','d','e','f','g'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#aaaaaa',
                width:'1'
            }
        },
        splitLine:{
            lineStyle: {
                color: ['rgba(163,216,252,0.20)']
            }
        },
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth:8,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#46ADEA','#E97F40','#F0AA20','#85CB99','#71CFE4',
                           '#F4D159','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: [3000, 1200, 1500, 1300, 1800, 2000, 1500]
        }
    ]
};
var option_4 = {
    // title : {
    //     text: '某站点用户访问来源',
    //     subtext: '纯属虚构',
    //     x:'center'
    // },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    color:["#46ADEA","#E97F40","#F0AA20","#85CB99","#71CFE4","#F4D159"],
    series : [
        {
            name: '多元渠道分团队保费占比',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'个险经代'},
                {value:310, name:'团险经代'},
                {value:234, name:'百销'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

var option_5 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    textStyle:{
        color:"#aaaaaa"
    },
    xAxis: {
        type: 'category',
        data: [],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#aaaaaa',
                width:'1'
            }
        },
        // axisLabel: {
        //     interval:0,
        //     rotate:20
        // },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#aaaaaa',
                width:'1'
            }
        },
        splitLine:{
            lineStyle: {
                color: ['rgba(163,216,252,0.20)']
            }
        },
        axisLabel: {
            textStyle: {
                color: '#aaaaaa'
            }
        }
    },
    grid: {
        left:45,
        right:10,
        top:30,
        bottom:33,
        containLabel:false,
        show:'true',
        borderWidth:'0'
    },
    series: [{
        data: [],
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                      '#46ADEA','#E97F40','#F0AA20','#85CB99','#71CFE4',
                       '#F4D159','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                       '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                    ];
                    return colorList[params.dataIndex]
                }
            }
        },
        barWidth:20,
    }]
    // color:["#46ADEA","#E97F40","#F0AA20","#85CB99","#71CFE4","#F4D159"]
};
export {
    option_1,
    option_2,
    option_3,
    option_4,
    option_5
}    