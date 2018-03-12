<template>
    <div class="login" flex="dir:top">
        <div class="header" flex-box="0">
        </div>
        <div class="body-warp" flex-box="1" flex>
            <div class="content" flex="main:center cross:center">
                <div class="text-warp" flex="main:justify cross:center">
                    <span v-for="(letter,index) in 'KINGOLD'" :key="index">{{letter}}</span>
                </div>
                <div class="container">
                    <div class="title" flex="main:center cross:center">用户登录</div>
                    <form class="form-warp" @submit.stop.prevent="login">
                        <div class="form-item" flex>
                            <label for="mobile" class="label" flex-box="0" flex="main:center cross:center">
                                手机号
                            </label>
                            <input flex-box="1" type="text" id="mobile"
                                   placeholder="请输入手机号"
                                   v-model="userLoginName" class="form-input">
                        </div>
                        <div class="form-item" flex v-show="imageCode">
                            <label for="imgCode" class="label" flex-box="0" flex="main:center cross:center">
                                图形验证码
                            </label>
                            <input id="imgCode" type="text" class="form-input"
                                   style="width: 120px"
                                   v-model="inputCode" flex-box="0">
                            <div flex-box="0" class="form-code" flex="main:center cross:center">{{imageCode}}</div>
                        </div>
                        <div class="form-item" flex v-show="loginType==1">
                            <label for="smsCode" class="label" flex-box="0" flex="main:center cross:center">
                                验证码
                            </label>
                            <input id="smsCode" type="text" class="form-input"
                                   style="width: 120px"
                                   v-model="inputCode" flex-box="0">
                            <div flex-box="0" class="form-code" flex="main:center cross:center">发送短信</div>
                        </div>

                        <div class="form-item" flex v-if="loginType==0">
                            <label for="password" class="label" flex-box="0" flex="main:center cross:center">
                                密码
                            </label>
                            <input flex-box="1" type="password" id="password"
                                   placeholder="请输入密码"
                                   v-model="userLoginPassword"
                                   class="form-input">
                        </div>
                        <div class="form-item" flex="main:right">
                            <span class="switch-type" @click.stop="switchType">
                                {{loginType?'密码登录':'验证码登录'}}

                            </span>
                        </div>
                        <div class="form-item" flex>
                            <label class="label" flex-box="0"></label>
                            <button class="btn-primary btn-login" flex-box="1"
                                    type="submit" :disabled="loading">{{loading?'登录中...':'登录'}}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="footer" flex-box="0"></div>

    </div>

</template>

<script>
    import '../less/login.less';
    import {isPassword, isPhone} from "../tools/operation";
    import {Message} from 'element-ui';

    export default {
        name: 'login',
        data() {
            return {
                loginType: 0,// 0:密码登录 ，1：验证码登录
                userLoginName: '',
                userLoginPassword: '',
                loading: false,
                imageCode: '',
                inputCode: '',
                smsText: '发送短信'
            }
        },
        created() {
        },
        computed: {},
        methods: {
            switchType() {
                this.loginType = (this.loginType + 1) % 2
            },
            login() {
                if (this.loading) {
                    return false;
                }
                let {userLoginName, userLoginPassword} = this;
                if (!userLoginName) {
                    Message.warning('请输入手机号码');
                    return false;
                }
                if (!userLoginPassword) {
                    Message.warning('请输入登录密码');

                    return false;
                }
                if (!isPhone(userLoginName)) {
                    Message.warning('请输入正确的11位手机号码');

                    return false;
                }
                if (!isPassword(userLoginPassword)) {
                    Message.warning('请输入正确的登录密码（6~20位数字和字母）');

                    return false;
                }
                if (this.imageCode && !this.inputCode) {
                    Message.warning('请输入图片验证码');
                    return false;
                }
                let data = {
                    userLoginName: this.userLoginName,
                    userLoginPassword: this.userLoginPassword
                };
                if (this.inputCode && this.imageCode) {
                    data.imageCode = this.inputCode;
                }
                this.loading = true;
                this.$api.post('/invest/login', data)
                    .then(res => {
                        this.loading = false;
                        if (res.code == 200) {
                            this.$store.dispatch('getUserInfo');
                            this.$store.dispatch('getBaofoo');
                            this.$router.push('/account');
                            return false

                        }
                        if (res.code == 1004) {
                            this.imageCode = res.data.imageCode;
                            Message.warning(res.msg);
                            return false
                        }
                        if (res.data && res.data.imageCode) {
                            this.imageCode = res.data.imageCode;
                            Message.error(res.msg);
                            return false
                        }

                        else {
                            Message.error(res.msg);
                        }
                    })
            }
        },
        mounted() {
        },
        destroyed() {

        }
    }
</script>


