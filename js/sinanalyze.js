option = {
    title : {},
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['卖淫嫖娼','经侦嫌疑','重点人口','刑侦重点','吸毒人口'],
        textStyle:{
            color:"#fff"
        }
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'卖淫嫖娼',itemStyle: {color: '#c1232b'}},
                {value:335, name:'经侦嫌疑',itemStyle: {color: '#27727b'}},
                {value:235, name:'重点人口',itemStyle: {color: '#fcce10'}},
                {value:135, name:'刑侦重点',itemStyle: {color: '#e87c25'}},
                {value:1500, name:'吸毒人口',itemStyle: {color: '#4ac7f5'}}
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

//初始化echarts实例
var myChart4 = echarts.init(document.getElementById("sin_analyze"));

//使用制定的配置项和数据显示图表
myChart4.setOption(option);