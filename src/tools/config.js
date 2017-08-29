/**
 * Created by DELL on 2017/6/5.
 */
let protocol = window.location.protocol;
export const devUrl = 'http://10.10.10.69:6640';
export const testUrl = `${protocol}//issuer-pc-test.zj-hf.cn`;
export const productionUrl = `${protocol}//issuer-pc-prod.zj-hf.cn`;
export const baofooCallUrlProduct = `${protocol}//callme.zj-hf.cn`;
export const baofooCallUrlTest = testUrl;
export const telNumber = '400-640-3606';
export const baofooTestUrl = 'https://paytest.baofoo.com/baofoo-custody/custody/';
export const baofooProductUrl = 'https://pm.baofoo.com/custody/';
export const nodeTestApi = `${protocol}//market-test.zj-hf.cn`;
export const nodeProductionApi = `${protocol}//market.zj-hf.cn`;

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
let iosUrl = 'https://itunes.apple.com/cn/app/%E9%87%91%E7%96%99%E7%98%A9/id1260433533?mt=8';
let androidUrl = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.zjinv.kingold';
export default {
    apiUrl,
    apiNode,
    iosUrl,
    androidUrl
}

