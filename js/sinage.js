
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['18-30','31-40','41-50','51-60','65岁以上','未标明'],
        textStyle: {
            color:"#fff",
            fontSize:18
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:300, name:'18-30', itemStyle: {color: '#c1232b'}},
                {value:300, name:'31-40', itemStyle: {color: '#27727b'}},
                {value:300, name:'41-50', itemStyle: {color: '#fcce10'}},
                {value:100, name:'51-60', itemStyle: {color: '#e87c25'}},
                {value:100, name:'65岁以上', itemStyle: {color: '#b5c334'}},
                {value:1500, name:'未标明', itemStyle: {color: '#4ac7f5'}}
            ]
        }
    ]
};

//初始化echarts实例
var myChart = echarts.init(document.getElementById("sin_age"));

//使用制定的配置项和数据显示图表
myChart.setOption(option);

$(window).resize(function(){
    myChart.resize();//若有多个图表变动，可多写
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
})