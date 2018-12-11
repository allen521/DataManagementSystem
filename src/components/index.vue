<template>
  <div class="report-page h100"  id="resumeDetailLoading">
    <Row class="h100"> 
        <Col span="6" class="h100 page-side">
          <h4 class="page-title">
            机构预算达成率
          </h4>
          <div class="page-content" style="position:relative;height:40%;">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div id="echart_1"></div>
            <Button type="primary" size="small" style="background: #50A5E0;position:absolute;right:4px;top:4px;padding:0 6px;">当月</Button>
          </div>
          <h4 class="page-title">
            热门产品保费排名
          </h4>
          <div class="page-content" style="height:46%">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div id="echart_3"></div>
          </div>
        </Col>
        <Col span="12" class="h100 page-middle">
          <h1 class="text-center">复星联合健康保险2019开门红</h1>
          <p class="text-right" style="height:14px">{{currDate}}</p>
          <div class="page-content">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div>
               <h3>全国销售总额</h3>
                <Row>
                <Col span="12" class="cash-flex">
                  <div class="text-center cash-item-l">新单保费收入 <br>（不含规模）</div>
                  <div class="saleTotal text-right"><span>123,455</span><span class="float-r">元</span></div>
                </Col>
                <Col span="12" class="cash-flex">
                  <div class="text-center cash-item-l cash-item-l-2">银保规模保费</div>
                  <div class="saleTotal text-right"><span>123,455</span><span class="float-r">元</span></div>
                </Col>
                </Row>  
            </div>
          </div>
          <div class="page-content">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div>
               <h3>各机构新单保费收入降序排列图表</h3>
                <Row>
                <Col span="24" class="cash-flex">
                  <div class="echart_5" style="width:100%;height:180px;"></div>
                </Col>
                </Row>  
            </div>
          </div>
          <div class="page-content">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div>
               <h3>各条线新单保费收入</h3>
                <Row>
                <Col span="24" class="cash-flex">
                  <div class="echart_5" style="width:100%;height:180px;"></div>
                </Col>
                </Row>  
            </div>
          </div>
        </Col>
        <Col span="6" class="h100 page-side">
          <h4 class="page-title">
            多元渠道分团队保费占比
          </h4>
          <div class="page-content" style="height:40%">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div id="echart_4"></div>
          </div>
          <h4 class="page-title">
            实时订单数据
          </h4>
          <div class="page-content" style="height:46%;margin-bottom:0;">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div class="page-table">
                <table class="table">
                  <thead>
                    <tr>
                      <th>地区</th>
                      <th>产品</th>
                      <th>时间</th>
                      <th>保费</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in tableData">
                      <td>{{item.location}}</td>
                      <td>{{item.name}}</td>
                      <td style="width:40%">{{item.date}}</td>
                      <td>{{item.total}}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </Col>
    </Row>
  </div>
</template>
<script>
let moment = require("moment");
import {
  option_1,
  option_2,
  option_3,
  option_4,
  option_5,
  echartsObj
} from "../ajaxData/echartData.js";
import echarts from 'echarts'
import $ from 'jquery'
export default {
  name: "treeIndex",
  data() {
    return {
      input:'',
      tableData:[],
      currNum:127868,
      currDate:' ',
      API:"http://localhost:9999/static/getEchartData_5.json",   //url为当前页面的api接口地址
    };
  },
  components: {
  },
  created() {
    let scope=this;
    //创建tableData数据
    scope.createTableList();
    
    //实时刷新当前时间
    setInterval(()=>{
      scope.updateCurrentDate()
    },1000)
  },
  mounted() {
    let scope=this;
    //ajax获取echart数据
    scope.getEchartData();

    $(window).resize(function() {
      setTimeout(()=>{
        scope.initEcharts()
      },500)
    });
    scope.initEcharts()
    //每隔3秒生成一个订单数据
    setInterval(()=>{
        scope.createTableList()
    },3000)
  },
  destroyed(){
    $(window).unbind("resize")
  },
  methods: {
    updateCurrentDate(){
        let scope=this;
        scope.currDate=moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
    },
    //ajax异步获取各机构新单保费收入降序排列图表
    getEchartData(){
      let scope=this,
          _API=scope.API;
      this.$axios.get(_API).then(res=>{
        let _d=res.data;
        if(res && _d){
          //拼接数据格式
          let _echarts_5_title=[],_echarts_5_data=[],_data=_d.data;
          _data.forEach((e,i) => {
            _echarts_5_title.push(e.name);
            _echarts_5_data.push(e.value)
          });
          //将序列化好的数据动态添加到当前echart图表的配置项option_5中
          option_5.xAxis.data=_echarts_5_title;
          option_5.series[0].data=_echarts_5_data;
          for(let k=0;k<2;k++){
            let myChart_5 = echarts.init(document.getElementsByClassName('echart_5')[k]);
            myChart_5.setOption(option_5);
          }
        }
      }).catch(error=>{

      });
    },
    createTableList(){
      let scope=this,
          list={
            location:"上海",
            name:"乳果爱",
            date:"2018-12-20",
            total:scope.currNum++
          },len=scope.tableData.length;
      scope.tableData.unshift(list);
      scope.tableData=scope.tableData.slice(0,10)
    },
    initEcharts(){
      // 基于准备好的dom，初始化echarts实例
      let myChart_1 = echarts.init(document.getElementById('echart_1')),
          // myChart_2 = echarts.init(document.getElementById('echart_2')),
          myChart_3 = echarts.init(document.getElementById('echart_3')),
          myChart_4 = echarts.init(document.getElementById('echart_4'));
      // 绘制图表
      myChart_1.setOption(option_1);
      // myChart_2.setOption(option_2);
      myChart_3.setOption(option_3);
      myChart_4.setOption(option_4);
    }
  }
};
</script>
<style scoped>
.page-side{
  padding:40px 19px;box-sizing:border-box;
}
.page-middle{
  padding-top:20px;
}
.page-middle .page-content{
  padding:21px 20px;box-sizing:border-box;margin:0 auto 20px;
  min-height: auto;
}
.page-middle h1{
  margin-bottom:10px;font-size:24px;
}
.page-middle h1+p{
  margin-bottom:10px;
}
.page-middle h3{font-size:16px;color:#ffffff;}
.page-table{
  padding:17px;box-sizing:border-box;height:100%;
}
.page-title{
  padding-left: 26px;
  font-size:14px;
  height: 42px;
  line-height: 42px;
  color:#ffffff;
  box-sizing: border-box;
  background: url('../../static/image/Rectangle.svg') no-repeat left center;
}
.page-content{
  margin:5px 0 29px;
  width: 100%;
  min-height: 170px;
  background-image: linear-gradient(-180deg, #033665 0%, #033665 100%);
  border: 1px solid rgba(51,148,184,0.10);
  position: relative;
}
.page-content i{
  position: absolute;
  z-index: 100;
  display: inline-block;
  padding:5px 7px;
  border:2px solid #3394B8;
}
i.top-l,i.top-r{
  top:-1px;
  border-bottom: transparent;
}
i.top-l{
  left: -1px;
  border-right: transparent;
}
i.top-r{
  right: -1px;
  border-left: transparent;
}
i.bottom-l,i.bottom-r{
  bottom: -1px;
  border-top: transparent;
}
i.bottom-l{
  left: -1px;
  border-right: transparent
}
i.bottom-r{
  right: -1px;
  border-left: transparent
}
.flex{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content:space-around;
}
.flex>div{
  width: 50%;
  height: 20%;
  box-sizing: border-box;
}
.flex img{
  width:100%;
  height: 130px;
}
.flex p{
  color:#FFCB66;;
  font-weight: 700;
  font-size:18px;
  margin: 10px auto;
  text-align: center;
}
.saleTotal{
  width: 60%;
  height: 50px;
  line-height:50px;
  font-size:40px;
  color: #ecb053;
  font-weight: 700;
}
.saleTotal .float-l{
  font-weight: 500;
}
.saleTotal .float-r{
  font-weight: 400;
  font-size: 20px;
  color: #f0f0f0;
}
#echart_1,#echart_2,#echart_3,#echart_4{
  height: 238px;
}
.table{
  width: 100%;
  border-collapse:collapse;
  color: #ffffff;
}
.table tr{
  height: 24px;
  line-height: 24px;
}
.table tr td{
  width: 20%;
  text-align: center;
}

.table tr:hover{
  background:rgba(249,249,249,.1);
  color:#f0f0f0;
}
.table tr th,.table tr:hover th{
  width:25%;
  background: rgba(80,165,224,0.50);
  text-align: center;
}
.cash-flex{
  display: flex;
  justify-content: center;
}
.cash-item-l{
  width: 40%;
  height:47px;
  font-size: 14px;
  padding-top: 13px;
  box-sizing: border-box;
}
.cash-item-l-2{
  padding-top: 21px;
}
</style>
