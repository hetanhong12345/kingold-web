/**
 * Created by DELL on 2017/6/5.
 */
let protocol = window.location.protocol;
let apiUrl = 'http://10.10.10.69:6640';
let apiNode = `${protocol}//market-test.zj-hf.cn`;
if (process.env.kingold == 'test') {
    apiUrl = 'http://10.10.10.69:6640';
    apiNode = `${protocol}//market-test.zj-hf.cn`;
}
if (process.env.kingold == 'production') {
    apiUrl = 'http://10.10.10.69:6640';
    apiNode = `${protocol}//market.zj-hf.cn`;
}
export let iosUrl = 'https://itunes.apple.com/cn/app/%E9%87%91%E7%96%99%E7%98%A9/id1260433533?mt=8';
export let androidUrl = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.zjinv.kingold';
export default {
    apiUrl,
    apiNode

}

