<template>
    <div class="login" flex="dir:top">
        <div class="header" flex-box="0">
            <button class="btn-default" @click.stop="login">login</button>
        </div>
        <div class="body-warp" flex-box="1">
            <div class="content"></div>
        </div>
        <div class="footer" flex-box="0"></div>

    </div>

</template>

<script>

    export default {
        name: 'login',
        data() {
            return {}
        },
        created() {
        },
        computed: {},
        methods: {
            login() {
                let data = {
                    userLoginName: '13720057698',
                    userLoginPassword: 'hxx123'
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

<style scoped>
    .login {
        position: relative;
        width: 100%;
        height: 100%;
        .header, .footer {
            height: 58px;
            background: #EBEEF0;
        }
        .body-warp {
            background: #FE7A6F;
            width: 100%;
            .content {
                margin: auto;
                width: 1200px;
            }
        }
    }

</style>
