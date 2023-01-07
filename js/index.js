// 展示时间
var t = null;
t = setTimeout(time, 1000);//開始运行
function time() {
  clearTimeout(t);//清除定时器
  dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours();//获取时
  var m = dt.getMinutes();//获取分
  var s = dt.getSeconds();//获取秒
  document.querySelector(".showTime").innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
  t = setTimeout(time, 1000); //设定定时器，循环运行     
}

// 柱状图1模块
// 立即执行函数 防止变量污染
(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    // xAxis: [
    //   {
    //     type: "category",
    //     data: [
    // "旅游行业",
    // "教育培训",
    // "游戏行业",
    // "医疗行业",
    // "电商行业",
    // "社交行业",
    // "金融行业"
    //     ],
    //     // axisTick: {
    //     //   alignWithLabel: true
    //     // },
    // axisLabel: {
    //   textStyle: {
    //     color: "rgba(255,255,255,.6)",
    //     fontSize: "12"
    //   }
    // },
    //     // axisLine: {
    //     //   show: true
    //     // }
    //   }
    // ],
    xAxis: {
      type: 'category',
      data: [
        "旅游行业",
        "教育培训",
        "游戏行业",
        "医疗行业",
        "电商行业",
        "社交行业",
        "金融行业"
      ],
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        }
      },
    },
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  // 图表随着页面大小变化
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { year: "2021", data: [200, 300, 300, 900, 1500, 1200, 600] },
    { year: "2022", data: [800, 900, 650, 700, 1100, 1400, 700] }
  ];
  //这里写一个点击事件 点击切换图表数据   
  document.querySelectorAll('a').forEach((item, index) => {
    item.addEventListener('click', function () {
      option.series[0].data = dataAll[index].data;
      myChart.setOption(option)
    })
  })
})();
// 左二 线形图
// 折线图1模块制作
(function () {
  var yearData = [
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2022", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "新增粉丝",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: "新增游客",
        type: "line",
        smooth: true,
        data: yearData[0].data[1]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //这里写一个点击事件 点击切换图表数据   
  document.querySelectorAll('a').forEach((item, index) => {
    item.addEventListener('click', function () {
      var obj = yearData[index];
      option.series[0].data = obj.data[0];
      option.series[1].data = obj.data[1]
      myChart.setOption(option)
    })
  })
})();
// 左三图表
(function () {
  var myChart = echarts.init(document.querySelector('.pie .chart'))
  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      // 距离底部为0%
      bottom: "0%",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  myChart.setOption(option)
})();
// 右1图表
(function () {
  var myChart = echarts.init(document.querySelector('.right1 .chart'))
  var yearData = [
    {
      name: 2021,
      data: [55, 67, 98, 32, 12]
    },
    {
      name: 2022,
      data: [78, 21, 38, 90, 32]
    }
  ]

  var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
  option = {
    grid: {
      left: '11%',
      top: '12%',
      right: '0%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: [{
      show: false,
    }],
    yAxis: [{
      axisTick: 'none',
      axisLine: 'none',
      offset: '27',
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: '16',
        }
      },
      data: [
        "HTML5", "CSS3", "javascript", "VUE", "NODE"
      ]
    }, {
      axisTick: 'none',
      axisLine: 'none',
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: '16',
        }
      },
      data: ['5', '4', '3', '2', '1']
    }, {
      name: '分拨延误TOP 10',
      nameGap: '50',
      nameTextStyle: {
        color: '#ffffff',
        fontSize: '16',
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0)'
        }
      },
      data: [],
    }],
    series: [{
      name: '条',
      type: 'bar',
      yAxisIndex: 0,
      data: yearData[0].data,
      label: {
        normal: {
          show: true,
          position: 'right',
          textStyle: {
            color: '#ffffff',
            fontSize: '16',
          }
        }
      },
      barWidth: 12,
      itemStyle: {
        normal: {
          color: function (params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num]
          },
        }
      },
      z: 2
    }, {
      name: '白框',
      type: 'bar',
      yAxisIndex: 1,
      barGap: '-100%',
      data: [99.5, 99.5, 99.5, 99.5, 99.5],
      barWidth: 20,
      itemStyle: {
        normal: {
          color: '#0e2147',
          barBorderRadius: 5,
        }
      },
      z: 1
    }, {
      name: '外框',
      type: 'bar',
      yAxisIndex: 2,
      barGap: '-100%',
      data: [100, 100, 100, 100, 100],
      barWidth: 18,
      itemStyle: {
        normal: {
          color: function (params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num]
          },
          barBorderRadius: 5,
        }
      },
      z: 0
    },
    {
      name: '外圆',
      type: 'scatter',
      hoverAnimation: false,
      data: [0, 0, 0, 0, 0],
      yAxisIndex: 2,
      symbolSize: 20,
      itemStyle: {
        normal: {
          color: function (params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num]
          },
          opacity: 1,
        }
      },
      z: 2
    }
    ]
  };
  myChart.setOption(option)
  //这里写一个点击事件 点击切换图表数据   
  document.querySelectorAll('a').forEach((item, index) => {
    item.addEventListener('click', function () {
      option.series[0].data = yearData[index].data
      myChart.setOption(option)
    })
  })
  // 图表随着页面大小变化
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 右二图表
(function () {
  var myChart = echarts.init(document.querySelector('.right2 .chart'))
  var option = {
    radar: {
      indicator: [
        { name: '速度', max: 6500 },
        { name: '力量', max: 16000 },
        { name: '技能', max: 30000 },
        { name: '替身', max: 38000 },
        { name: '耐力', max: 52000 },
        { name: '天赋', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 2000, 3500, 5000, 1800],
            name: '数量'
          },
          {
            value: [500, 1400, 2800, 2600, 42000, 21000],
            name: '速度'
          }
        ]
      }
    ]
  };
  myChart.setOption(option)
  // 图表随着页面大小变化
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 中间地图
(function () {
  // 中间地图
  var myChart = echarts.init(document.querySelector(".earth .chart"));
  var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  };

  var XAData = [
    [{ name: '西安' }, { name: '北京', value: 100 }],
    [{ name: '西安' }, { name: '上海', value: 100 }],
    [{ name: '西安' }, { name: '广州', value: 100 }],
    [{ name: '西安' }, { name: '西宁', value: 100 }],
    [{ name: '西安' }, { name: '拉萨', value: 100 }]
  ];

  var XNData = [
    [{ name: '西宁' }, { name: '北京', value: 100 }],
    [{ name: '西宁' }, { name: '上海', value: 100 }],
    [{ name: '西宁' }, { name: '广州', value: 100 }],
    [{ name: '西宁' }, { name: '西安', value: 100 }],
    [{ name: '西宁' }, { name: '银川', value: 100 }]
  ];
  // 定义飞行路线
  var YCData = [
    [{ name: '银川' }, { name: '北京', value: 100 }],
    [{ name: '银川' }, { name: '广州', value: 100 }],
    [{ name: '银川' }, { name: '上海', value: 100 }],
    [{ name: '银川' }, { name: '西安', value: 100 }],
    [{ name: '银川' }, { name: '西宁', value: 100 }],
  ];

  var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  //var planePath = 'arrow';
  var convertData = function (data) {

    var res = [];
    for (var i = 0; i < data.length; i++) {

      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;

  };

  var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
  var series = [];
  [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
    series.push({
      name: item[0] + ' Top3',
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: 'red',   //arrow箭头的颜色
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    },
      {
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + ' Top3',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      });
  });
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'multiple'
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      zoom: 1.2,
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#00186E',
          borderColor: '#195BB9',
          borderWidth: 1,
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  // 图表随着页面大小变化
  window.addEventListener("resize", function () {
    myChart.resize();
  });

})();
