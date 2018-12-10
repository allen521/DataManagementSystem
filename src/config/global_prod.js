/**
 * Created by xujx on 2017/7/8.   http://5011fa-0.sh.1253132977.clb.myqcloud.com/api/v1   http://172.16.52.86:8103/api/v1
 */
// 全局静态配置
const config = {
    // 接口信息配置
    apiConfig: {
        //接口地址
        originUrl: '/apis/api/v1',
        saveResumeUrl: '/apis/sr/api/v1',
        //七牛上传地址
        qiuinUpload: '',
        // 登录成功后调转到的url
        loginBackUrl: '',
        //登录地址
        loginUrl: '',
        // 退出登录
        logout: ''
    }
}
window.inMindConfig = config.apiConfig;
export default config