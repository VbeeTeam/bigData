
option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['河北', '天津', '北京', '新疆', '内蒙', '宁夏', '海南'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine:{
                lineStyle:{
                    color:"#fff"
                }
            }
        },
    ],
    yAxis : [
        {
            splitLine:{//网格线
                lineStyle:{
                    type:"dashed",
                }
            },
            type : 'value',
            axisLine:{//轴线
                show:false,
                lineStyle:{
                    color:"#fff",
                }
            }
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};

//初始化echarts实例
var myChart2 = echarts.init(document.getElementById("sin_region"));

//使用制定的配置项和数据显示图表
myChart2.setOption(option);