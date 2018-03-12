<template>
    <div class="recharge">
        <div class="content">
            <div v-if="recharge==0">
                <div flex="cross:center" class="item">
                    <span class="star"></span>
                    <span class="info">充值方式</span>
                    <span class="txt">网银充值</span>
                </div>
                <div flex="cross:center" class="item">
                    <span class="star">*</span>
                    <span class="info">充值金额</span>
                    <input type="text" placeholder="请输入充值金额"
                           maxlength="12" @keyup="myKeyup"
                           class="input" v-model="rechargeMoney">
                    <span class="red a" @click.stop="showBankList">查看充值限额</span>
                </div>
                <div flex="cross:center" class="item">
                    <span class="star">*</span>
                    <span class="info">手续费</span>
                    <span class="txt">0元</span>
                </div>
                <div flex="cross:center" class="item">
                    <span class="star"></span>
                    <span class="info"></span>
                    <button class="btn-primary next-btn" @click.stop="nextStep">下一步</button>
                </div>
            </div>
            <div v-if="recharge==1" class="result">
                <img src="../images/recharge/succ.png" alt="" class="img">
                <button class="succ-btn">再充一笔</button>
            </div>
            <div v-if="recharge==2" class="result">
                <img src="../images/recharge/fail.png" alt="" class="img">
                <button class="fail-btn">重新充值</button>
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
            <div class="recharge-tip">
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
    import EventBus from '../tools/event-bus';
    import {currencyInputValidate, submitRecharge} from '../tools/operation';
    import {Message} from 'element-ui';

    let timer = null;
    export default {
        name: 'recharge',
        data() {
            return {
                recharge: 0, // 0:充值 ，1：充值成功，2：充值失败
                disabled: true,
                rechargeMoney: '',//充值金额
                handlingCharge: 0,//手续费
            }
        },
        created() {
        },
        computed: {
            amount: function () {
                if (this.rechargeMoney) {
                    return Number(this.rechargeMoney) + Number(this.handlingCharge);
                }
                return 0;
            }
        },
        methods: {
            // 银行限额列表
            showBankList() {
                EventBus.$emit('showBankList');
            },
            nextStep() {
                if (!this.rechargeMoney) {
                    Message.warning('请输入充值金额');
                    return false;
                }
                if (Number(this.rechargeMoney) < 0) {
                    Message.warning('请输入正确金额');
                    return false;
                }
                if (this.disabled) {
                    return false
                }
                if (this.amount >= 1000000000000) {
                    Message.warning('充值金额加手续费不要超过10000亿元！');
                    return false;
                }
                let newWind = window.open('/blank', '_KingGoldBlank');
                return this.$api.post('/invest/trade/recharge', {amount: this.amount})
                    .then(res => {
                        if (res.code != 200) {
                            newWind.close();
                            Message.error(res.msg);
                            return false;
                        }
                        let params = res.data || {};
                        params.amount = this.amount;
                        params.userId = this.$store.state.userId;
                        submitRecharge(params);
                    })
            },
            myKeyup() {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    this.rechargeMoney = currencyInputValidate(this.rechargeMoney);
                    if (this.rechargeMoney) {
                        this.disabled = false;
                    } else {
                        this.disabled = true;
                    }
                }, 100);
            },
            // 充值完成
            complete() {

            }
        },
        mounted() {
            EventBus.$on('complete', this.complete);
        },
        destroyed() {

        }
    }
</script>

<style scoped>

</style>
