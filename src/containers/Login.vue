<template>
    <div class="login" flex="dir:top">
        <div class="header" flex-box="0"></div>
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
        methods: {},
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
