<template>
  <div class="report-page h100"  id="resumeDetailLoading">
    <Row class="h100"> 
        <Col span="6" class="h100 page-side">
          <h4 class="page-title">
            各地区总保费排名
          </h4>
          <div class="page-content" style="position:relative">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div id="echart_1"></div>
            <Button type="primary" size="small" style="background: #50A5E0;position:absolute;right:4px;top:4px;padding:0 6px;">当月</Button>
          </div>
          <h4 class="page-title">
            预算目标达成情况
          </h4>
          <div class="page-content">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div id="echart_2"></div>
          </div>
          <h4 class="page-title">
            热门产品保费排名
          </h4>
          <div class="page-content">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div id="echart_3"></div>
          </div>
        </Col>
        <Col span="12" class="h100 page-middle">
          <h1 class="text-center">复星联合健康险开门红</h1>
          <div class="page-content" style="">
            <i class="top-l"></i>
            <i class="top-r"></i>
            <i class="bottom-l"></i>
            <i class="bottom-r"></i>
            <div>
               <h3>全国销售总额</h3>
               <h2 class="saleTotal text-center"><span class="float-l">￥</span><span>123,455,388</span><span class="float-r">元</span></h2>
               <div class="project flex">
                  <div v-for="item in 6">
                    <div class="echart_5" style="width:100%;height:180px;"></div>
                    <p>{{locationArr[item-1]}}</p>
                  </div>
               </div>
            </div>
          </div>
        </Col>
        <Col span="6" class="h100 page-side">
          <h4 class="page-title">
            各条线销售额
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
import {
  option_1,
  option_2,
  option_3,
  option_4,
  option_5
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
      locationArr:['北京','上海','深圳','重点客户','医保发展部','四川']
    };
  },
  components: {
  },
  created() {
    //创建tableData数据
    this.createTableList();
  },
  mounted() {
    let scope=this;
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
          myChart_2 = echarts.init(document.getElementById('echart_2')),
          myChart_3 = echarts.init(document.getElementById('echart_3')),
          myChart_4 = echarts.init(document.getElementById('echart_4'));
      for(let k=0;k<6;k++){
        let myChart_5 = echarts.init(document.getElementsByClassName('echart_5')[k]);
        myChart_5.setOption(option_5);
      }
      // 绘制图表
      myChart_1.setOption(option_1);
      myChart_2.setOption(option_2);
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
  padding-top:39px;
}
.page-middle .page-content{
  padding:21px 20px;box-sizing:border-box;margin:0 auto 20px;
}
.page-middle h1{
  margin-bottom:24px;font-size:24px;
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
  height: 80px;
  line-height: 100px;
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
    height: 170px;
}
#echart_4{
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
</style>
