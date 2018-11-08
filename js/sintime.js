option = {
    xAxis: {
        type: 'category',
        axisLine:{
            lineStyle:{
                color:"#3398DB"
            }
        },
        data: ['6:00-9:00','10:00-12:00','13:00-15:00','16:00-20:00','21:00-24:00']
    },
    yAxis: {
        min:0,
        max:800,
        type: 'value',
        axisLine:{
            lineStyle:{
                color:"#3398DB"
            }
        }
    },
    grid:{
      right:"10%"
    },
    series: [{
        data: [800, 400, 500, 700, 400],
        type: 'line',
        smooth: true
    }]
};

//初始化echarts实例
var myChart3 = echarts.init(document.getElementById("sin_time"));

//使用制定的配置项和数据显示图表
myChart3.setOption(option);