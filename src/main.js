// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
import router from './router'
//eleme组件
import { Loading } from 'element-ui';
Vue.use(Loading);
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})