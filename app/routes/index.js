import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [{"id": 1, "title": "重构特战英雄的登录", "time": "12-20"}, {"id": 2, "title": "改版联运后台", "time": "02-05"}, {
      "id": 3,
      "title": "修改联运通用登陆模版",
      "time": "12-4"
    }, {"id": 4, "title": "修改联运通用活动模版", "time": "11-20"}, {"id": 5, "title": "修改市场外投通用模版", "time": "11-28"}];
  }
});
$(function () {
  WinMove();
  setTimeout(function () {
    $.gritter.add({
      title: '您有8条未读信息',
      text: '请前往<a href="mailbox.html" class="text-warning">收件箱</a>查看今日任务',
      time: 10000
    });
    $('.chart').easyPieChart({
      barColor: '#f8ac59',
      //                scaleColor: false,
      scaleLength: 5,
      lineWidth: 4,
      size: 80
    });

    $('.chart2').easyPieChart({
      barColor: '#1c84c6',
      //                scaleColor: false,
      scaleLength: 5,
      lineWidth: 4,
      size: 80
    });

    var data1 = [
      [0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 30], [11, 10], [12, 13], [13, 4], [14, 3], [15, 3], [16, 6]
    ];
    var data2 = [
      [0, 1], [1, 0], [2, 2], [3, 0], [4, 1], [5, 3], [6, 1], [7, 5], [8, 2], [9, 3], [10, 2], [11, 1], [12, 0], [13, 2], [14, 8], [15, 0], [16, 0]
    ];
    $("#flot-dashboard-chart").length && $.plot($("#flot-dashboard-chart"), [
      data1, data2
    ], {
      series: {
        lines: {
          show: false,
          fill: true
        },
        splines: {
          show: true,
          tension: 0.4,
          lineWidth: 1,
          fill: 0.4
        },
        points: {
          radius: 0,
          show: true
        },
        shadowSize: 2
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#d5d5d5",
        borderWidth: 1,
        color: '#d5d5d5'
      },
      colors: ["#1ab394", "#464f88"],
      xaxis: {},
      yaxis: {
        ticks: 4
      },
      tooltip: false
    });

  }, 100);
});
