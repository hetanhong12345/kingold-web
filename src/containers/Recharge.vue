<template>
    <div class="recharge">
        <div class="content">
            <div flex="cross:center" class="item">
                <span class="star"></span>
                <span class="info">充值方式</span>
                <span class="txt">网银充值</span>
            </div>
            <div flex="cross:center" class="item">
                <span class="star">*</span>
                <span class="info">充值金额</span>
                <input type="text" placeholder="请输入充值金额" class="input">
                <a href="" class="red a">查看充值限额</a>
            </div>
            <div flex="cross:center" class="item">
                <span class="star">*</span>
                <span class="info">手续费</span>
                <span class="txt">0元</span>
            </div>
            <div flex="cross:center" class="item">
                <span class="star"></span>
                <span class="info"></span>
                <button class="next-btn">下一步</button>
            </div>
        </div>
        <div class="record">
            <p class="title">充值记录</p>
            <div class="table-line" flex="box:mean">
                <span>充值时间</span>
                <span class="border-left">充值金额(元)</span>
                <span class="border-left">充值方式</span>
                <span class="border-left">状态</span>
            </div>
            <div class="table-line item" flex="box:mean">
                <span class="grey">2018.01.12 12:16:21</span>
                <span class="black border-left">100</span>
                <span class="black border-left">网银充值</span>
                <span class=" blue border-left">处理中</span>
            </div>
            <div class="table-line item" flex="box:mean">
                <span class="grey">2018.01.12 12:16:21</span>
                <span class="black border-left">100</span>
                <span class="black border-left">网银充值</span>
                <span class="green border-left">处理中</span>
            </div>
            <div class="pagination" flex="main:center cross:center">
                <span class="txt">首页</span>
                <span class="txt">&lt&lt</span>
                <div class="pages" flex>
                    <span class="num">1</span>
                    <span class="num">2</span>
                </div>
                <span class="txt">&gt&gt</span>
                <span class="txt">尾页</span>
                <span class="margin-left">跳转</span>
                <input placeholder="22" class="page-input">
                <span>页</span>
                <button class="page-btn">确认</button>
            </div>
            <div class="tip">
                <div class="tip-title">
                    <span>!</span>
                    <span>温馨提示</span>
                </div>
                <p>1、如果在充值过程中遇到问题请致电：400-812-XXXXXXXX；</p>
                <p>2、请使用借记卡充值，信用卡无法充值；</p>
                <p>3、开通网银方法：</p>
                <p style="margin-left: 14px">（1）携带本人身份证到银行柜台办理。（2）登录网上银行办理；</p>
                <p>4、每日的充值限额依据各银行限额为准；</p>
                <p>5、充值手续费暂由平台承担。</p>
            </div>
        </div>
    </div>

</template>

<script>
    import '../less/recharge.less';

    export default {
        name: 'recharge',
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
