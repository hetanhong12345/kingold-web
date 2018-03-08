<template>
    <div class="account">
        <div class="header"></div>
        <div class="body-warp" flex>
            <div class="left-items" flex-box="0">
                <router-link class="menu-item" :to="{path:'/account/center'}"
                             active-class="menu-active"
                             replace flex="main:center cross:center">账户中心
                </router-link>
                <router-link class="menu-item" :to="{path:'/account/recharge'}"
                             active-class="menu-active"
                             replace flex="main:center cross:center">充值
                </router-link>
            </div>
            <div class="right-content" flex-box="1">
                <router-view></router-view>
            </div>

        </div>

    </div>

</template>

<script>
    import '../less/account.less';

    export default {
        name: 'account',
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

</style>
