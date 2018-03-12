<template>
    <div class="bank-list">
        <div class="body">
            <p class="title">网银充值限额表</p>
            <div class="bank-wrap" flex="main:justify">
                <div class="bank-item"></div>
                <div class="bank-item"></div>
                <div class="bank-item"></div>
                <div class="bank-item"></div>
                <div class="bank-item"></div>
            </div>
            <div class="bank-wrap" flex="main:justify">
                <div class="bank-item"></div>
                <div class="bank-item"></div>
                <div class="bank-item"></div>
                <div class="bank-item"></div>
                <div class="bank-item more">更多银行</div>
            </div>
            <div class="table-line table-title" flex="box:mean">
                <span>单笔限额</span>
                <span class="border-left">单日限额</span>
                <span class="border-left">必要条件</span>
            </div>
            <div class="table-line item" flex="box:mean">
                <span >1万元</span>
                <span class="border-left">1万元</span>
                <span class="border-left">e支付</span>
            </div>
            <div class="table-line item" flex="box:mean">
                <span >500万元</span>
                <span class="border-left">无限制</span>
                <span class="border-left">网银支付</span>
            </div>
            <button class="close-btn" @click.stop="close">关闭</button>
        </div>
    </div>
</template>

<script>
    import './bank-list.less';
    export default {
        name: 'bank-list',
        data(){
            return {}
        },
        created(){
        },
        computed: {},
        methods: {
            close(){
                this.$emit('close')
            }
        },
        destroyed(){

        }
    }
</script>
