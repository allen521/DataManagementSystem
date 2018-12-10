import echarts from 'echarts'
var option_1 = {
    textStyle:{
        color:"#aaaaaa"
    },
    xAxis: {
        type: 'category',
        data: ['上海', '广东', '北京', '电商', '重点客户','医保发展'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#aaaaaa',
                width:'1'
            }
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
        bottom:20,
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
        top:"30px",
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
    textStyle:{
        color:"#aaaaaa"
    },
    xAxis: {
        type: 'category',
        data: ['个险', '团险', '银保', '电商'],        
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#aaaaaa',
                width:'1'
            }
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
        bottom:20,
        containLabel:false,
        show:'true',
        borderWidth:'0'
    },
    series: [{
        data: [820, 932, 901, 1934],
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
};
var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

// app.configParameters = {
//     rotate: {
//         min: -90,
//         max: 90
//     },
//     align: {
//         options: {
//             left: 'left',
//             center: 'center',
//             right: 'right'
//         }
//     },
//     verticalAlign: {
//         options: {
//             top: 'top',
//             middle: 'left',
//             bottom: 'bottom'
//         }
//     },
//     position: {
//         options: echarts.util.reduce(posList, function (map, pos) {
//             map[pos] = pos;
//             return map;
//         }, {})
//     },
//     distance: {
//         min: 0,
//         max: 100
//     }
// };

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};
var labelOption = {
    normal: {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

// var option_5 = {
//     textStyle:{
//         color:"#aaa"
//     },
//     color: ['#46ADEA','#E97F40','#F0AA20','#85CB99','#71CFE4',
//          '#F4D159','#9BCA63','#FAD860'
//     ],
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'shadow'
//         }
//     },
//     grid: {
//         left:30,
//         right:10,
//         top:10,
//         bottom:20,
//         containLabel:false,
//         show:'true',
//         borderWidth:'0'
//     },
//     // legend: {
//     //     data: ['Forest', 'Steppe', 'Desert', 'Wetland']
//     // },
//     calculable: true,
//     xAxis: [
//         {
//             type: 'category',
//             axisTick: {show: false},
//             data: [ '2014', '2015', '2016','2017', '2018'],
//             axisLine: {
//                 lineStyle: {
//                     type: 'solid',
//                     color:'#aaaaaa',
//                     width:'1'
//                 }
//             },
//         }
//     ],
//     yAxis: [
//         {
//             type: 'value',
//             splitLine:{
//                 lineStyle: {
//                     color: ['rgba(163,216,252,0.20)']
//                 }
//             },
//             axisLine: {
//                 lineStyle: {
//                     type: 'solid',
//                     color:'#aaaaaa',
//                     width:'1'
//                 }
//             },
//         }
//     ],
//     series: [
//         {
//             name: '个险',
//             type: 'bar',
//             barGap: 0,
//             barWidth:8,
//             // label: labelOption,
//             data: [320, 332, 301, 334, 390]
//         },
//         {
//             name: '团险',
//             type: 'bar',
//             barWidth:8,
//             // label: labelOption,
//             data: [220, 182, 191, 234, 290]
//         },
//         {
//             name: '银保',
//             type: 'bar',
//             barWidth:8,
//             // label: labelOption,
//             data: [150, 232, 201, 154, 190]
//         },
//         {
//             name: '电商',
//             type: 'bar',
//             barWidth:8,
//             // label: labelOption,
//             data: [98, 77, 101, 99, 40]
//         }
//     ]
// };
var option_5= {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color: ['#46ADEA','#E97F40','#F0AA20','#85CB99','#71CFE4',
         '#F4D159','#9BCA63','#FAD860'
    ],
    // legend: {
    //     data: ['个险', '团险','银保','电商']
    // },
    grid: {
        left:40,
        right:10,
        top:10,
        bottom:20,
        containLabel:false,
    },
    xAxis:  {
        type: 'category',
        data: ['2014','2015','2016','2017','2018'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#aaaaaa',
                width:'1'
            }
        },
    },
    yAxis: {
        type: 'value',
        splitLine:{
            lineStyle: {
            color: ['rgba(163,216,252,0.20)']
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color:'#aaaaaa',
                width:'1'
            }
        },
    },
    series: [
        {
            name: '个险',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'inside'
                }
            },
            data: [ 301, 334, 390, 1330, 320]
        },
        {
            name: '团险',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'inside'
                }
            },
            data: [101, 1134, 90, 230, 210]
        },
        {
            name: '银保',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'inside'
                }
            },
            data: [191, 234, 290, 1330, 310]
        },
        {
            name: '电商',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'inside'
                }
            },
            data: [220, 182, 191, 234, 1290]
        }
    ]
};
export {
    option_1,
    option_2,
    option_3,
    option_4,
    option_5
}    