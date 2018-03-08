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
                            <label for="mobile" class="label" flex-box="0" flex="main:justify cross:center">
                                <span>手</span>
                                <span>机</span>
                                <span>号</span>
                            </label>
                            <input flex-box="1" type="text" id="mobile"
                                   placeholder="请输入手机号"
                                   v-model="userLoginName" class="form-input">
                        </div>

                        <div class="form-item" flex>
                            <label for="password" class="label" flex-box="0" flex="main:justify cross:center">
                                <span>密</span>
                                <span>码</span>
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
                            <button class="btn-primary btn-login" flex-box="1" type="submit">登录</button>
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

    export default {
        name: 'login',
        data() {
            return {
                loginType: 0,// 0:密码登录 ，1：验证码登录
                userLoginName: '',
                userLoginPassword: ''
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
                let {userLoginName, userLoginPassword} = this;
                if (!userLoginName) {

                    return false;
                }
                if (!userLoginPassword) {
                    return false;
                }
                if (!isPhone(userLoginName)) {
                    return false;
                }
                if (!isPassword(userLoginPassword)) {
                    return false;
                }
                let data = {
                    userLoginName: this.userLoginName,
                    userLoginPassword: this.userLoginPassword
                };
                this.$api.post('/invest/login', data)
                    .then(res => {
                        if (res.code == 200) {
                            this.$store.dispatch('getUserInfo');
                            this.$store.dispatch('getBaofoo');
                            this.$router.push('/account');

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


