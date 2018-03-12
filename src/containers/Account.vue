<template>
    <div class="account">
        <bank-list v-if="isShowList" @close="isShowList = false"></bank-list>
        <tip v-if="isShowTip" @close="isShowTip = false"></tip>
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
    import EventBus from '../tools/event-bus';
    import BankList from '../components/BankList';
    import Tip from '../components/Tip';
    import '../less/account.less';

    export default {
        name: 'account',
        data() {
            return {
                isShowList: false,
                isShowTip:false
            }
        },
        created() {
            EventBus.$on('showBankList', () => {
                this.isShowList = true;
            })
        },
        computed: {},
        components: {BankList,Tip},
        methods: {},
        mounted() {
        },
        destroyed() {

        }
    }
</script>

<style scoped>

</style>
