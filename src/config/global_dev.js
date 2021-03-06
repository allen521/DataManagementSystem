/**
 * Created by xujx on 2017/7/8.
 */
// 全局静态配置
const config = {
    // 接口信息配置
    apiConfig: {
        //接口地址
        originUrl: 'http://www.1brc.testing/apis/api/v1',
        saveResumeUrl: 'http://www.1brc.testing/apis/sr/api/v1',
        //七牛上传地址
        qiuinUpload: "",
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