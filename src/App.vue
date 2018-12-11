<template>
  <div id="app" class="report-page">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
a,abbr,acronym,address,b,bdo,big,blockquote,body,br,button,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,form,h1,h2,h3,h4,h5,h6,html,i,img,ins,kbd,legend,li,map,object,ol,p,pre,q,samp,small,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,ul,var {
    margin: 0;
    padding: 0
}

body,button,input,listing,plaintext,pre,select,textarea,xmp {
    font-size: 13px;
    line-height: 1;
    font-weight: 400;
    color: #111;
    font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-smoothing: antialiased
}

fieldset,img {
    border: 0
}

li ,ul{
    list-style: none;
}
a {
    outline: 0;
    font-size: 13px;
    cursor: pointer
}

a,a:hover {
    text-decoration: none
}

a:hover {
    opacity: .9
}

body {
    background-color: #ffffff;
}

html {
    box-sizing: border-box
}

*,:after,:before {
    box-sizing: inherit
}

input[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    top: 7px;
    margin-right: 10px;
    width: 19px;
    height: 19px;
    border: 1px solid #ebebeb;
    border-radius: 50%
}

input[type=checkbox]:focus {
    outline: none
}

input[type=checkbox]:checked {
    border-color: #2693e6
}

input[type=checkbox]:checked:after {
    content: "L";
    color: #2693e6;
    font-size: 15px;
    position: absolute;
    top: 0;
    left: 5px;
    -webkit-transform: scaleX(-1) rotate(-45deg);
    transform: scaleX(-1) rotate(-45deg)
}

#app {
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    font-size:14px;
    color:#f0f0f0;
    background-image: linear-gradient(-180deg, #033665 0%, #033665 100%);
    min-width: 1280px;
    /* min-height: 720px; */
    overflow: auto;
}
.h100{
    height: 100%;
}
.text-center{
    text-align: center;
}
.text-right{
    text-align:right;
}
.float-l{
    float: left;
}
.float-r{
    float:right;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width:8px;
    height:8px;
    background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius:8px;
    background-color: #F5F5F5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius:8px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
</style>
